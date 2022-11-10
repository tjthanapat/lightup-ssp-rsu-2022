import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const booth_groups = require('./../../constants/booths.json');
const max_selection = 4;

const BoothSelection = (props) => {
  const { selectedBooths, setSelectedBooths } = props;

  const handleChangeSelectBooth = (event) => {
    const selectedBooth = event.target.value;
    if (selectedBooths.includes(selectedBooth)) {
      setSelectedBooths(
        selectedBooths.filter((booth) => booth !== selectedBooth)
      );
    } else if (selectedBooths.length < max_selection) {
      setSelectedBooths([...selectedBooths, selectedBooth]);
    }
  };

  const checkedBooth = (boothId) => {
    return selectedBooths.includes(boothId);
  };

  const disabledBooth = (boothId) => {
    if (selectedBooths.length < max_selection) {
      return false;
    } else if (selectedBooths.includes(boothId)) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      {booth_groups.map((booth_group) => {
        return (
          <div key={booth_group.id} className="my-5">
            <h2 className="text-xl">{booth_group.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              {booth_group.booths.map((booth) => {
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
