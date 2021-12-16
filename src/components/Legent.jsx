import React from 'react'
import * as data from '../Legends.json';

// Legend for any monitor
const Legent = ({ LegentId, MonitorTypeName }) => {
  // Get the data from json file
  const legends = data.default;
  const index = LegentId === 1 ? 0 : 1;
  const legentTitle = MonitorTypeName === 0 ? "All" : MonitorTypeName;
   
  return (
    <div>
        <strong style={{color: 'black'}}>{legentTitle}</strong>
        <div>
            <br />
            {/* Display the legend by LegendId from NavigationBar (get it after click -> output to app -> pass to Legent by props 'LegentId') */}
          {legends.Legends[index].tags.map((tag, ind) => (
              <div key={ind}>
              <div><div style={{height: '1rem', width: '1rem', backgroundColor: tag.Color, display: 'inline-block'}}></div> {tag.Label}</div>
          </div>
          ))}
      </div>
    </div>
  );
}

export default React.memo(Legent)
