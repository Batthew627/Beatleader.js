import BeatLeaderAPI from ".";

async function test() {
    const me = await BeatLeaderAPI.fetchPlayerScores("76561198308893404")
    console.log(me)
}
test()