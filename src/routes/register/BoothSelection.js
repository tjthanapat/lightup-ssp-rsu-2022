import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const boothGroups = require('./../../constants/booths.json');
const maxSelection = 4;

const BoothSelection = (props) => {
  const { selectedBooths, setSelectedBooths } = props;

  const handleChangeSelectBooth = (event) => {
    const selectedBooth = event.target.value;
    if (selectedBooths.includes(selectedBooth)) {
      setSelectedBooths(
        selectedBooths.filter((booth) => booth !== selectedBooth)
      );
    } else if (selectedBooths.length < maxSelection) {
      setSelectedBooths([...selectedBooths, selectedBooth]);
    }
  };

  const checkedBooth = (boothId) => {
    return selectedBooths.includes(boothId);
  };

  const disabledBooth = (boothId) => {
    if (selectedBooths.length < maxSelection) {
      return false;
    } else if (selectedBooths.includes(boothId)) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      {boothGroups.map((boothGroup) => {
        return (
          <div key={boothGroup.id} className="my-5">
            <h2 className="text-xl">{boothGroup.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              {boothGroup.booths.map((booth) => {
                return (
                  <FormControlLabel
                    key={booth.id}
                    label={booth.name}
                    control={
                      <Checkbox
                        value={booth.id}
                        checked={checkedBooth(booth.id)}
                        onChange={handleChangeSelectBooth}
                      />
                    }
                    disabled={disabledBooth(booth.id)}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BoothSelection;
