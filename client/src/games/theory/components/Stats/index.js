import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import {scaleLinear} from 'd3-scale';

const Score = ({userData, statsData, optimisticLeaderboard}) => {
  const topScore = userData.totalCorrect > statsData.avgTotalCorrect ? userData.totalCorrect : statsData.avgTotalCorrect;
  const scoreScale = scaleLinear().domain([0, topScore]).range([0, 40]);
  const scoreColorScale = scaleLinear().domain([0, topScore]).range(['#f44336', '#4caf50']);

  const topSkill = userData.correctRatio > statsData.avgCorrectRatio ? userData.correctRatio : statsData.avgCorrectRatio;
  const skillScale = scaleLinear().domain([0, topSkill]).range([0, 40]);
  const skillColorScale = scaleLinear().domain([0, 1]).range(['#f44336', '#4caf50']);
  const rankMessage = setRankMessage(optimisticLeaderboard);

  return (
    <div className="stats secondaryText">
      <div className="stats__permanentContent">
        <div className="stats__nameContainer">
          <div>{userData.username}</div>
          <div>{rankMessage}</div>
        </div>
        <div className="stats__scoreContainer">
          <div className="stats__scoreLabel">Score</div>
          <hr/>
          <div className="">{userData.totalCorrect}</div>
        </div>
      </div>
      <div className="stats__slideDownContent">
        <div className="stats__score">
          <div className="stats__lineChartContainer">
            <div className="stats__lineChartLabel stats__lineChartLabel--large">
              {`my score: ${userData.totalCorrect}`}
            </div>
            <svg viewBox="0 0 40 2"
                 className="stats__lineChart"
                 style={{ borderLeft: `1px solid ${scoreColorScale(userData.totalCorrect)}` }}>
              <line
                x1="0"
                x2={scoreScale(userData.totalCorrect)}
                y1="1"
                y2="1"
                stroke={scoreColorScale(userData.totalCorrect)}
              />
            </svg>
          </div>
          <div className="stats__lineChartContainer">
            <div className="stats__lineChartLabel">
              {`avg: ${statsData.avgTotalCorrect}`}
            </div>
            <svg viewBox="0 0 40 2"
                 className="stats__lineChart"
                 style={{ borderLeft: `1px solid ${scoreColorScale(statsData.avgTotalCorrect)}` }}>
              <line x1="0"
                    x2={scoreScale(statsData.avgTotalCorrect)}
                    y1="1"
                    y2="1"
                    stroke={scoreColorScale(statsData.avgTotalCorrect)}
              />
            </svg>
          </div>
        </div>

        <div className="stats__skill">
          <div className="stats__lineChartContainer">
            <div className="stats__lineChartLabel stats__lineChartLabel--large">
              {`my skill: ${(userData.correctRatio * 100).toFixed(0)}`}
              <span className="stats__lineChartLabel--tiny">%</span>
            </div>
            <svg viewBox="0 0 40 2"
                 className="stats__lineChart"
                 style={{ borderLeft: `1px solid ${skillColorScale(userData.correctRatio)}` }}>
              <line
                x1="0"
                x2={skillScale(userData.correctRatio)}
                y1="1"
                y2="1"
                stroke={skillColorScale(userData.correctRatio)}
              />
            </svg>
          </div>
          <div className="stats__lineChartContainer">
            <div className="stats__lineChartLabel">
              {`avg: ${statsData.avgCorrectRatio * 100}`}
              <span className="stats__lineChartLabel--tiny">%</span>
            </div>
            <svg viewBox="0 0 40 2"
                 className="stats__lineChart"
                 style={{ borderLeft: `1px solid ${skillColorScale(statsData.avgCorrectRatio)}` }}>
              <line
                x1="0"
                x2={skillScale(statsData.avgCorrectRatio)}
                y1="1"
                y2="1"
                stroke={skillColorScale(statsData.avgCorrectRatio)}
              />
            </svg>
          </div>
        </div>
      </div>
      </div>
  );
};

function setRankMessage(leaderboard) {
  if (!leaderboard) return 'Loading rank...';

  const rank = leaderboard.findIndex(u => u.isCurrentUser === true) + 1;

  return `Rank: ${rank} of ${leaderboard.length}`;
}


export default Score;

Score.propTypes = {
  userData: PropTypes.object,
  statsData: PropTypes.object
};
