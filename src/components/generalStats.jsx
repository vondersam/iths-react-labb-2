import { useMemo } from 'react';
import { calculateStats } from '../helpers/calculateStats';

const GeneralStats = ({ state }) => {
  const [energy, co2] = useMemo(
    () => calculateStats(state.websiteList),
    [state.websiteList]
  );
  const kwg = Number.parseFloat(energy).toFixed(5);
  const co2Grams = Number.parseFloat(co2).toFixed(3);

  return (
    <div>
      {energy !== 0 &&
        `All websites combined use ${kwg} KWg of energy per page load and ${co2Grams} CO2 gr. from the grid per page load`}
    </div>
  );
};

export default GeneralStats;
