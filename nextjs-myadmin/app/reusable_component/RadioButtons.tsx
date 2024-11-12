import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function IconCheckboxes() {
  return (
    <div>
      <Checkbox
        {...label}
        icon={<RadioButtonCheckedIcon sx={{ color: 'red' }} />} // Use sx to set icon color to red
        checkedIcon={<RadioButtonUncheckedIcon sx={{ color: 'red' }} />} // Use sx to set checked icon color to red
      />
    </div>
  );
}
