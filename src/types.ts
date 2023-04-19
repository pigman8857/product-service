import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";
import { Knex } from "knex";

//#region merge declare Fastify types
declare module "fastify" {
  interface FastifyInstance {
    db: DbRepos;
    httpClient: HttpClient;
  }
}

//#endregion

//#region DB types

export interface DbModel {
  getData: () => Promise<any>;
  createData: (data: any) => Promise<any>;
  updateData: (advertiser_id : number,data: any) => Promise<any>;
}
export interface DbRepos {
  product: DbModel;
}

export interface DBInstanceSettings {
  host: string;
  port: number;
  username: string;
  password: string;
  dbName: string;
}

//#endregion

//#region Config types

export interface ConfigInstance {
  env: string;
  port: number;
  serviceHost: string;
  servicePort: string;
  db: DBInstanceSettings;
}

//#endregion

export interface Properties {
  [name: string]: { type: string };
}
export interface SchemaProps {
  type: string;
  properties: Properties;
}

type HandlerCallback = (
  fastify: FastifyInstance
) => (request: FastifyRequest, reply: FastifyReply) => Promise<void>;

export interface Handlers {
  healthCheckHandler: HandlerCallback;
  readEntryHandler: HandlerCallback;
}

export interface HttpClientRequestResult {
  status: number;
  data: any;
}

export interface HttpClient {
  sendRequest: (data: any) => Promise<HttpClientRequestResult>;
}

export type SendableEvents = "";

export type ConcernEvents = "";
