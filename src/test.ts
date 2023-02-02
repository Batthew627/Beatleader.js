import  fs from "fs";
import BeatLeaderAPI from ".";

async function test() {
    const me = await BeatLeaderAPI.fetchAllPlayerScores("76561198308893404") as string
    fs.writeFileSync('test.json',JSON.stringify(me))
}
test()