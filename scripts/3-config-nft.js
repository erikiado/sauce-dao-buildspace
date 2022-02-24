import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x7593E4C4cB36CC59bf904Fc50477663F4377dE08",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Taster Spoon",
        description: "This NFT will give you access to SauceDAO!",
        image: readFileSync("scripts/assets/spoon.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()