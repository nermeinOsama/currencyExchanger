export class BaseResponseModel {
    data: any;
    error: any;
    message?:string;
    isSuccess?: boolean;
    statusCode?: number;
}
