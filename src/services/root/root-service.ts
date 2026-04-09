import { z } from 'zod';
import { BaseService } from '../base-service';
import { ContentType, HttpResponse, SdkConfig } from '../../http/types';
import { RequestBuilder } from '../../http/transport/request-builder';
import { SerializationStyle } from '../../http/serialization/base-serializer';
import { ThrowableError } from '../../http/errors/throwable-error';
import { Environment } from '../../http/environment';
import { NewRequestRequest, newRequestRequestRequest } from './models/new-request-request';
import { NewRequestParams } from './request-params';

/**
 * Service class for RootService operations.
 * Provides methods to interact with RootService-related API endpoints.
 * All methods return promises and handle request/response serialization automatically.
 */
export class RootService extends BaseService {
  protected newRequestConfig: Partial<SdkConfig> = { environment: Environment.KAMEDA };

  /**
   * Sets method-level configuration for newRequest.
   * @param config - Partial configuration to override service-level defaults
   * @returns This service instance for method chaining
   */
  setNewRequestConfig(config: Partial<SdkConfig>): this {
    this.newRequestConfig = config;
    return this;
  }

  /**
   *
   * @param {string} params.accept -
   * @param {string} [params.userid] -
   * @param {string} [params.time] -
   * @param {Partial<SdkConfig>} [requestConfig] - The request configuration for retry and validation.
   * @returns {Promise<HttpResponse<any>>} - OK
   */
  async newRequest(
    body: NewRequestRequest,
    params: NewRequestParams,
    requestConfig?: Partial<SdkConfig>,
  ): Promise<any> {
    const resolvedConfig = this.getResolvedConfig(this.newRequestConfig, requestConfig);
    const request = new RequestBuilder()
      .setConfig(resolvedConfig)
      .setBaseUrl(resolvedConfig)
      .setMethod('POST')
      .setPath('/')
      .setRequestSchema(newRequestRequestRequest)
      .setRequestContentType(ContentType.Json)
      .addResponse({
        schema: z.any(),
        contentType: ContentType.Json,
        status: 200,
      })
      .addQueryParam({
        key: 'userid',
        value: params?.userid,
      })
      .addQueryParam({
        key: 'time',
        value: params?.time,
      })
      .addHeaderParam({
        key: 'Accept',
        value: params?.accept,
      })
      .addHeaderParam({ key: 'Content-Type', value: 'application/json' })
      .addBody(body)
      .build();
    return this.client.callDirect<any>(request);
  }
}
