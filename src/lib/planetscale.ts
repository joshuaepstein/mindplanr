import { connect } from '@planetscale/database';

export const pscale_config = {
  host: process.env['DATABASE_HOST'] || '',
  username: process.env['DATABASE_USERNAME'] || '',
  password: process.env['DATABASE_PASSWORD'] || '',
};

const conn = connect(pscale_config);

// custom cached connection that sets next.revalidate to 900s
export const cachedConn = process.env['DATABASE_URL']
  ? connect({
      ...pscale_config,
      fetch: (url, init) => {
        // set next.revalidate
        return fetch(url, {
          ...init,
          cache: 'no-cache',
          next: {
            revalidate: 900,
          },
        });
      },
    })
  : null;
