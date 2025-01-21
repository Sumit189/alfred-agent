import luciusFox from "./luciusFox";
import { injectTransferTools } from "../utils";
import alfred from "./alfred";
import kent from "./kent";

alfred.downstreamAgents = [luciusFox, kent];
luciusFox.downstreamAgents = [alfred];

const agents = injectTransferTools([ alfred, luciusFox, kent ]);

export default agents;