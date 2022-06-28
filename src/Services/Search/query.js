import { gql } from "@apollo/client";

export const GET_ALL_DATA = gql`
  query schedule($type: String, $status: String, $page: Int) {
    schedule(type: $type, status: $status, page: $page) {
      seriesID
      matchName
      matchType
      matchdate
      homeTeamName
      homeTeamID
      playerofTheMatchTeamShortName
      teamsWinProbability {
        tiePercentage
        homeTeamShortName
        awayTeamShortName
        homeTeamPercentage
        awayTeamPercentage
      }
      awayTeamID
      awayTeamName
      playing11Status
      matchScore {
        teamID
        teamScore {
          teamID
          runRate
          runsScored
          wickets
          battingTeam
          battingSide
          battingTeamShortName
          inningNumber
        }
        teamFullName
        teamShortName
      }
      matchStatus
      matchResult
      matchNumber
      seriesName
      league
    }
  }
`;

export const GET_TEAM_SEARCH = gql`
    query teamSearch($name:String){
        teamSearch(name:$name){
            name
            teamID
            shortName
        }
    }
`;

//   query teamSearch(name:"India"){
//     name
//     teamID
//     shortName
//   }
