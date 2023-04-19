import { FastifyInstance } from "fastify";
import { ConfigInstance } from "../types";
import fastifyAMQP from "fastify-amqp";
const amqpRegister = (fastify: FastifyInstance, config: ConfigInstance) => {
  console.log("###amqpRegister");
  const { protocol, password, username, port, hostname, vhost } = config.amqp;
  const setting = {
    // the default value is amqp
    protocol,
    hostname,
    // the default value is 5672
    port,
    // the default value is guest
    username,
    // the default value is guest
    password,
    // the default value is empty
    vhost,
  };
  fastify.register(fastifyAMQP, setting);
};

export default amqpRegister;
