import { NextRouter } from 'next/router';
import { HOME_HOSTNAMES } from './constants';

export const isHomeHostname = (domain: string) => {
  return HOME_HOSTNAMES.has(domain) || domain.endsWith('.vercel.app');
};

export const currentUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://mindplanr.com'
    : 'http://localhost:3000';

export const currentUrlWithCname = (cname: string) => {
  if (isValidUrl(cname)) return cname;
  return process.env.NODE_ENV === 'production'
    ? `https://${cname}.mindplanr.com`
    : `http://${cname}.localhost:3000`;
};

// courtesy of ChatGPT: https://sharegpt.com/c/pUYXtRs
export const validDomainRegex = new RegExp(
  /^([a-zA-Z0-9]([a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
);

export const validSlugRegex = new RegExp(/^[a-zA-Z0-9\-]+$/);

export const getSubdomain = (name: string, apexName: string) => {
  if (name === apexName) return null;
  return name.slice(0, name.length - apexName.length - 1);
};

export const isValidUrl = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

export const getUrlFromString = (str: string) => {
  if (isValidUrl(str)) return str;
  try {
    if (str.includes('.') && !str.includes(' ')) {
      return new URL(`https://${str}`).toString();
    }
  } catch (e) {
    return null;
  }
};

export const getDomainWithoutWWW = (url: string) => {
  if (isValidUrl(url)) {
    return new URL(url).hostname.replace(/^www\./, '');
  }
  try {
    if (url.includes('.') && !url.includes(' ')) {
      return new URL(`https://${url}`).hostname.replace(/^www\./, '');
    }
  } catch (e) {
    return null;
  }
};

export const getQueryString = (
  router: NextRouter,
  opts?: Record<string, string>,
) => {
  const queryString = new URLSearchParams({
    ...(router.query as Record<string, string>),
    ...opts,
  }).toString();
  return `${queryString ? '?' : ''}${queryString}`;
};

export const setQueryString = (
  router: NextRouter,
  param: string,
  value: string,
) => {
  if (param !== 'page') delete router.query.page;
  let newQuery;
  if (value.length > 0) {
    newQuery = {
      ...router.query,
      [param]: value,
    };
  } else {
    delete router.query[param];
    newQuery = { ...router.query };
  }
  // here, we omit the slug from the query string as well
  const { slug, ...finalQuery } = newQuery;
  router.replace({
    pathname: `/${router.query.slug || 'links'}`,
    query: finalQuery,
  });
};

export const truncate = (str: string | null, length: number) => {
  if (!str || str.length <= length) return str;
  return `${str.slice(0, length - 3)}...`;
};

export const getParamsFromURL = (url: string) => {
  if (!url) return {};
  try {
    const params = new URL(url).searchParams;
    const paramsObj: Record<string, string> = {};
    for (const [key, value] of params.entries()) {
      if (value && value !== '') {
        paramsObj[key] = value;
      }
    }
    return paramsObj;
  } catch (e) {
    return {};
  }
};

export const constructURLFromUTMParams = (
  url: string,
  utmParams: Record<string, string>,
) => {
  if (!url) return '';
  try {
    const newURL = new URL(url);
    for (const [key, value] of Object.entries(utmParams)) {
      if (value === '') {
        newURL.searchParams.delete(key);
      } else {
        newURL.searchParams.set(key, value);
      }
    }
    return newURL.toString();
  } catch (e) {
    return '';
  }
};

export const paramsMetadata = [
  { display: 'Referral (ref)', key: 'ref', examples: 'twitter, facebook' },
  { display: 'UTM Source', key: 'utm_source', examples: 'twitter, facebook' },
  { display: 'UTM Medium', key: 'utm_medium', examples: 'social, email' },
  { display: 'UTM Campaign', key: 'utm_campaign', examples: 'summer_sale' },
  { display: 'UTM Term', key: 'utm_term', examples: 'blue_shoes' },
  { display: 'UTM Content', key: 'utm_content', examples: 'logolink' },
];

export const getUrlWithoutUTMParams = (url: string) => {
  try {
    const newURL = new URL(url);
    paramsMetadata.forEach((param) => newURL.searchParams.delete(param.key));
    return newURL.toString();
  } catch (e) {
    return url;
  }
};
