'use client';
import Button from '@/components/app/button';
import LoadingCircle from '@/components/shared/icons/loading-circle';
import { Input } from '@mindplanr/ui/input';
import { Label } from '@mindplanr/ui/label';
import {
  CheckCircledIcon,
  ExclamationTriangleIcon,
} from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import { toast } from 'sonner';
import { useDebounce } from 'use-debounce';

export default function CreateProjectForm() {
  const [slugError, setSlugError] = useState<string | null>(null);
  const [fetchingExistingSlug, setFetchingExistingSlug] = useTransition();
  const [saving, setSaving] = useTransition();
  const router = useRouter();

  const [data, setData] = useState<{
    name: string;
    slug: string;
    logo?: File | undefined;
  }>({
    name: '',
    slug: '',
  });

  const { name, slug, logo } = data;

  const [debounceSlug] = useDebounce(slug, 500);
  useEffect(() => {
    if (debounceSlug.length > 0 && !slugError) {
      setFetchingExistingSlug(async () => {
        const res = await fetch(`/api/projects/${slug}/exists`);
        if (res.status === 200) {
          const exists = await res.json();
          setSlugError(exists === 1 ? 'Slug is already in use.' : null);
        }
      });
    }
  }, [debounceSlug]);

  return (
    <div className="flex w-full max-w-lg flex-col space-y-3 mt-4">
      <Label>Name</Label>
      <Input
        value={name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        className="w-full"
      />
      <div className="flex items-center justify-between">
        <Label>Slug</Label>
        {(fetchingExistingSlug && <LoadingCircle />) || (
          <div className="flex flex-row space-x-2 items-center justify-end">
            {(slugError && (
              <ExclamationTriangleIcon className="h-4 w-4 text-red-500" />
            )) || <CheckCircledIcon className="h-4 w-4 text-green-500" />}
            <p className="text-sm text-zinc-500">{slug.length} / 30</p>
          </div>
        )}
      </div>
      <Input
        value={slug}
        onChange={(e) => {
          if (/[^a-z0-9-]/g.test(e.target.value)) {
            setSlugError(
              'Only lowercase letters, numbers and dashes are allowed.',
            );
            setTimeout(() => setSlugError(null), 1000);
          }
          setData({
            ...data,
            slug: e.target.value
              .toLowerCase()
              .replaceAll(' ', '-')
              .replaceAll(/[^a-z0-9-]/g, ''),
          });
        }}
        className="w-full"
      />
      {slugError && <p className="text-sm text-red-500">{slugError}</p>}

      <Button
        text="Create Project"
        loading={saving}
        disabled={fetchingExistingSlug || slugError != null}
        disabledTooltip={
          fetchingExistingSlug
            ? 'Checking if slug is available...'
            : slugError
            ? 'Slug is not available.'
            : null
        }
        onClick={() => {
          setSaving(() => {
            fetch('/api/projects', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name,
                slug,
              }),
            }).then((res) => {
              if (res.status === 200) {
                toast.success('Successfully created project!');
                router.push(`/app/project/${slug}`);
              }
            });
          });
        }}
      />
    </div>
  );
}
