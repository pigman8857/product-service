import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";
import handlers from "../handlers";
const { fn } = jest;

describe("Test handlers", () => {
  const { readEntryHandler, healthCheckHandler } = handlers();

  describe("Test readEntryHandler", () => {
    //@ts-ignore
    const req: FastifyRequest = {
      params: {
        id: 1,
      },
    };
    //@ts-ignore
    const res: FastifyReply = {
      status: fn(),
      send: fn(),
    };

    const fastify: FastifyInstance = {
      db: {
        //@ts-ignore
        product: {
          getData: fn(),
        },
      },
    };
    it("test if successfully call", async () => {
      await expect(
        readEntryHandler(fastify)(req, res)
      ).resolves.toBeUndefined();
    });
  });

  describe("Test healthCheckHandler", () => {
    //@ts-ignore
    const req: FastifyRequest = {
      params: {
        id: 1,
      },
    };
    //@ts-ignore
    const res: FastifyReply = {
      status: fn(),
      send: fn(),
    };
    const fastify: FastifyInstance = {
      //@ts-ignore
      db: {},
    };
    it("test if successfully call", async () => {
      await expect(
        healthCheckHandler(fastify)(req, res)
      ).resolves.toBeUndefined();
    });
  });
});
