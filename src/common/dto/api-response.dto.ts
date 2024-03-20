class Builder<T> {
  private apiResponseDto: APIResponseDto<T>;

  constructor() {
    this.apiResponseDto = new APIResponseDto<T>();
  }

  public setData(data: T | T[]) {
    this.apiResponseDto.data = data;
    return this;
  }

  public setMessage(message: string) {
    this.apiResponseDto.message = message;
    return this;
  }

  public setError(error: string) {
    this.apiResponseDto.error = error;
    return this;
  }

  public setTotal(total: number) {
    this.apiResponseDto.total = total;
    return this;
  }

  public build(): APIResponseDto<T> {
    return {
      data: this.apiResponseDto.data,
      message: this.apiResponseDto.message,
      total: this.apiResponseDto.total,
      error: this.apiResponseDto.error,
    };
  }
}

export class APIResponseDto<T> {
  data: T | T[];
  message?: string;
  error?: string;
  total?: number;

  public static builder<T>() {
    return new Builder<T>();
  }
}
