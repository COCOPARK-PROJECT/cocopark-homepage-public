import createCache from "@emotion/cache";
import { prefixer } from "stylis";

const customPlugin = () => {};

export const emotionCache = createCache({
  key: `gafin-io`,
  prepend: true,
  stylisPlugins: [
    customPlugin,
    // has to be included manually when customizing `stylisPlugins` if you want
    // to have vendor prefixes added automatically
    prefixer,
  ],
});
