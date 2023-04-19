import { FastifyInstance, FastifySchema } from "fastify";
import { SchemaProps, Handlers } from "../types";

const index = (fastifyInstance: FastifyInstance, handlers: Handlers) => {
  return () => {

    const getAdvertiserParamsProp: SchemaProps = {
      type: "object",
      properties: {
        id: { type: "number" },
      },
    };

    const getAdvertiserSchema: FastifySchema = {
      params: getAdvertiserParamsProp,
    };

    const eventsSchema: FastifySchema = {
      //   params: getAdvertiserParamsProp,
      body: {
        type: "object",
        properties: {
          eventName: { type: "string" },
          data: {
            type: "object",
            additionalProperties: {
              anyOf: [{ type: "string" }, { type: "number" }, { type : "object"}],
            },
          },
        },
      },
      response: {
        201: {
          type: "object",
          properties: {
            status: { type: "string" },
          },
        },
      },
    };

    const readEntryHandler = handlers.readEntryHandler(fastifyInstance);
    const healthCheckHandler = handlers.healthCheckHandler(fastifyInstance);

    fastifyInstance.get("/health", healthCheckHandler);

    fastifyInstance.get(
      "/advertisers/:id",
      {
        schema: getAdvertiserSchema,
      },
      readEntryHandler
    );
  };
};

export default index;
