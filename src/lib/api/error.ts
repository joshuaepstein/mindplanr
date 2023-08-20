import { NextResponse } from 'next/server'

export enum ErrorType {
    NotFound = '404',
    InternalServerError = '500',
    NotImplemented = '501',
    BadGateway = '502',
    ServiceUnavailable = '503',
    GatewayTimeout = '504',
    HTTPVersionNotSupported = '505',
    VariantAlsoNegotiates = '506',
    InsufficientStorage = '507',
    LoopDetected = '508',
    NotExtended = '510',
    NetworkAuthenticationRequired = '511',
    NetworkConnectTimeoutError = '599',
    InvalidRequest = '400',
    Unauthorized = '401',
    Forbidden = '403',
    Conflict = '409',
    TooManyRequests = '429',
    UnknownError = '520',
    WebServerIsDown = '521',
    ConnectionTimedOut = '522',
    OriginIsUnreachable = '523',
    ATimeoutOccurred = '524',
    SSLHandshakeFailed = '525',
}

export interface Error {
    type: ErrorType
    message: string
    data?: any
    docs: DocPage
}

export interface DocPage {
    title: string
    // url: URL | string
    // make url which must start with "https://docs.mindplanr.com/"
    url: `https://docs.mindplanr.com/${string}`
}

export function createError({ type, message, docs, data }: Error): Error {
    return {
        type,
        message,
        docs,
        data,
    }
}

export function returnNextError({
    type,
    message,
    docs,
    data,
    missingFields,
}: Error & {
    missingFields?: (string | null)[]
}): NextResponse {
    var errorTypeName = ''
    for (const [key, value] of Object.entries(ErrorType)) {
        if (value === type) {
            errorTypeName = formatErrorTypeName(key)
        }
    }

    if (type === ErrorType.InvalidRequest && missingFields && missingFields.length > 0) {
        message = 'Invalid request'
        if (missingFields) {
            message += `: Missing fields: ${missingFields.join(', ')}`
        }
    }

    return NextResponse.json(
        {
            type: errorTypeName || type,
            message,
            docs,
            data,
        },
        {
            status: parseInt(type),
            statusText: message,
        }
    )
}

function formatErrorTypeName(errorTypeName: string): string {
    // Add spaces between words -- /([A-Z])/g <--- Ignore the first uppercase letter
    errorTypeName = errorTypeName.replace(/([A-Z])/g, ' $1')
    if (errorTypeName.startsWith(' ')) {
        errorTypeName = errorTypeName.slice(1)
    }
    // Uppercase first letter
    errorTypeName = errorTypeName.charAt(0).toUpperCase() + errorTypeName.slice(1)
    return errorTypeName
}