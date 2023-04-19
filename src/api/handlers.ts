import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";
import { Handlers } from "../types";

const healthCheckHandler = (fastify: FastifyInstance) => {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    console.log("healthCheckHandler");
    reply.status(200);
    reply.send("Good\n");
    return;
  };
};

const readEntryHandler = (fastify: FastifyInstance) => {
  return async (request: FastifyRequest, reply: FastifyReply) => {
    console.log("readEntryHandler.");
    const { id } = request.params as { id: number };

    const {
      db: { product },
    } = fastify;

    try {
      const result = await product.getData();
      console.log("result", result);
      console.log("id > ", id);
      reply.status(200);
      reply.send(`this is product ${id}`);
    } catch (error) {
      console.log("error >", error);
      reply.status(500);
      reply.send(error);
    }
    return;
  };
};

export default function handlers(): Handlers {
  return {
    healthCheckHandler,
    readEntryHandler,
  };
}
