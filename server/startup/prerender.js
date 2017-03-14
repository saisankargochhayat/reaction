import prerender from "prerender-node";
import { WebApp } from "meteor/webapp";
import { Logger } from "/server/api";

export default function () {
  if (process.env.PRERENDER_TOKEN && process.env.PRERENDER_HOST) {
    prerender.set("prerenderToken", process.env.PRERENDER_TOKEN);
    prerender.set("host", process.env.PRERENDER_HOST);
    prerender.set("protocol", "https");
    WebApp.rawConnectHandlers.use(prerender);
    Logger.debug("Prerender Initialization finished.");
  }
}
