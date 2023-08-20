import { NextResponse } from 'next/server'

export interface Success {
    code: number
    message: string
    data?: any
    docs: DocPage | URL | string
}

export interface DocPage {
    title: string
    url: URL | string
}

export function createSuccess({ code, message, docs, data }: Success): Success {
    return {
        code,
        message,
        docs,
        data,
    }
}

export function returnNextSuccess({ code, message, docs, data }: Success): NextResponse {
    return NextResponse.json(
        {
            message,
            docs,
            data,
        },
        {
            status: code,
            statusText: message,
        }
    )
}