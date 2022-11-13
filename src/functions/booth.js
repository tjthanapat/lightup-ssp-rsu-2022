const boothGroups = require('./../constants/booths.json');

export const getBoothNameById = (boothId) => {
  for (let i = 0; i < boothGroups.length; i++) {
    const boothGroup = boothGroups[i];
    for (let j = 0; j < boothGroup.booths.length; j++) {
      const booth = boothGroup.booths[j];
      if (boothId === booth.id) {
        return booth.name;
      }
    }
  }
};
