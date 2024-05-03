import { ApiResult } from './ApiResult';
import { ApiRequestOptions } from './ApiRequestOptions';

export declare class ApiError extends Error {
    readonly url: string;
    readonly status: number;
    readonly statusText: string;
    readonly body: unknown;
    readonly request: ApiRequestOptions;
    constructor(request: ApiRequestOptions, response: ApiResult, message: string);
}
