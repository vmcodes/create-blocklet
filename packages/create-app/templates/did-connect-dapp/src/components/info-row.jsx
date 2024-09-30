/* eslint-disable react/require-default-props */
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export default function InfoRow({ icon = null, name, value }) {
  return (
    <Typography variant="body1" color="text.primary" gutterBottom sx={{ display: 'flex', alignItems: 'center' }}>
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 0.5,
          mr: 0.75,
          flexShrink: 0,
          '&:after': {
            content: '":"',
            ml: -0.25,
          },
        }}>
        {icon}
        {name}
      </Box>
      <Typography
        component="span"
        color="text.secondary"
        sx={{
          wordBreak: 'break-word',
        }}>
        {value}
      </Typography>
    </Typography>
  );
}

InfoRow.propTypes = {
  icon: PropTypes.any,
  name: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};