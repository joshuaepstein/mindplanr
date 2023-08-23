'use client';

import useMediaQuery from '@/lib/hooks/use-media-query';
import { cn } from '@mindplanr/utils/cn';
import * as Dialog from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';
import { Drawer } from 'vaul';

export default function Modal({
  children,
  showModal,
  setShowModal,
  className,
  onClose,
  preventDefaultClose,
}: {
  children: React.ReactNode;
  showModal?: boolean;
  setShowModal?: Dispatch<SetStateAction<boolean>>;
  className?: string;
  onClose?: () => void;
  preventDefaultClose?: boolean;
}) {
  const router = useRouter();

  const closeModal = ({ dragged }: { dragged?: boolean } = {}) => {
    if (preventDefaultClose && !dragged) {
      return;
    }
    // fire onClose event if provided
    onClose && onClose();

    // if setShowModal is defined, use it to close modal
    if (setShowModal) {
      setShowModal(false);
      // else, this is intercepting route @modal
    } else {
      router.back();
    }
  };
  const { isMobile } = useMediaQuery();

  if (isMobile) {
    return (
      <Drawer.Root
        open={setShowModal ? showModal : true}
        onOpenChange={(open) => {
          if (!open) {
            closeModal({ dragged: true });
          }
        }}
      >
        <Drawer.Overlay className="fixed inset-0 z-40 bg-gray-100/10 backdrop-blur" />
        <Drawer.Portal>
          <Drawer.Content
            className={cn(
              'fixed inset-x-0 bottom-0 z-50 mt-24 rounded-t-[10px] border-t border-gray-200 bg-white',
              className,
            )}
          >
            <div className="sticky top-0 z-20 flex w-full items-center justify-center rounded-t-[10px] bg-inherit">
              <div className="my-3 h-1 w-12 rounded-full bg-gray-300" />
            </div>
            {children}
          </Drawer.Content>
          <Drawer.Overlay />
        </Drawer.Portal>
      </Drawer.Root>
    );
  }
  return (
    <Dialog.Root
      open={setShowModal ? showModal : true}
      onOpenChange={(open) => {
        if (!open) {
          closeModal();
        }
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay
          id="modal-backdrop"
          className="fixed inset-0 z-40 hidden animate-fade-in bg-gray-100/50 backdrop-blur-md md:block"
        />
        <Dialog.Content
          onOpenAutoFocus={(e) => e.preventDefault()}
          onCloseAutoFocus={(e) => e.preventDefault()}
          className={cn(
            'animate-scale-in fixed inset-0 z-50 m-auto hidden max-h-fit w-full max-w-md overflow-hidden rounded-2xl border border-gray-200 bg-white p-0 shadow-xl md:block',
            className,
          )}
        >
          <XIcon
            className="h-5 w-5 text-zinc-400 absolute top-4 right-4 cursor-pointer hover:text-zinc-500 active:scale-95 transition"
            onClick={() => closeModal()}
          />
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
