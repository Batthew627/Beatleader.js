import type { Metadata } from './GenericResponses';

export interface Score    {
    "id": number,
    "baseScore": number,
    "modifiedScore": number,
    "accuracy": number,
    "playerId": string,
    "pp": number,
    "bonusPp": number,
    "rank": number,
    "countryRank": number,
    "country": string,
    "fcAccuracy": number,
    "fcPp": number,
    "replay": string,
    "modifiers": string,
    "badCuts": number,
    "missedNotes": number,
    "bombCuts": number,
    "wallsHit": number,
    "pauses": number,
    "fullCombo": boolean,
    "platform": string,
    "maxCombo": number,
    "maxStreak": number,
    "hmd": number,
    "controller": number,
    "leaderboardId": string,
    "timeset": string,
    "timepost": number,
    "replaysWatched": number,
    "scoreImprovement":ScoreImprovement,
    "weight": number,
    "accLeft": number,
    "accRight": number,
    "leaderboard": Leaderboard
    }

export interface ScoreImprovement{
    "id": number,
    "timeset": Date,
    "score": number,
    "accuracy": number,
    "pp": number,
    "bonusPp": number,
    "rank": number,
    "accRight": number,
    "accLeft": number,
    "averageRankedAccuracy": number,
    "totalPp": number,
    "totalRank": number,
    "badCuts": number,
    "missedNotes": number,
    "bombCuts": number,
    "wallsHit": number,
    "pauses": number
}
export interface Difficulty{
    "id": number,
    "value": number,
    "mode": number,
    "difficultyName": string,
    "modeName": string,
    "status": number,
    "modifierValues": Modifiers,
    "nominatedTime": Date,
    "qualifiedTime": Date,
    "rankedTime": Date,
    "stars": number,
    "type": number,
    "njs": number,
    "nps": number,
    "notes": number,
    "bombs": number,
    "walls": number,
    "maxScore": number,
    "duration": number
}

export interface Leaderboard{
  "id": string,
      "song":Song,
      "difficulty": Difficulty,
      "scores": Score[],
      "qualification": {
        "id": number,
        "timeset": Date,
        "rtMember": string,
        "criteriaTimeset": Date,
        "criteriaMet": number,
        "criteriaChecker": string,
        "criteriaCommentary": string,
        "mapperAllowed": boolean,
        "mapperId": string,
        "mapperQualification": boolean,
        "approvalTimeset": Date,
        "approved": boolean,
        "approvers": string,
        "modifiers": Modifiers
      },
}

export interface Song {
    "id": string,
    "hash": string,
    "name": string,
    "description": string,
    "subName": string,
    "author": string,
    "mapper": string,
    "mapperId": number,
    "coverImage": string,
    "downloadUrl": string,
    "bpm": number,
    "duration": number,
    "tags": string,
    "createdTime": Date,
    "uploadTime": Date,
    "difficulties": Difficulty[]
}

export interface Modifiers{
  "modifierId": number,
  "da": number,
  "fs": number,
  "ss": number,
  "sf": number,
  "gn": number,
  "na": number,
  "nb": number,
  "nf": number,
  "no": number,
  "pm": number,
  "sc": number,
  "sa": number
}

export interface ScoreCollection{
  metadata:Metadata,
  data:Score[]
}