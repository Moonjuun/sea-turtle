import * as React from 'react';
import { useEffect } from 'react';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled, useTheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FormatTextdirectionLToRIcon from '@mui/icons-material/FormatTextdirectionLToR';
import FormatTextdirectionRToLIcon from '@mui/icons-material/FormatTextdirectionRToL';
import { PaletteMode } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
}));

interface ToggleColorModeProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
  toggleColorLight: () => void;
  toggleColorDark: () => void;
}

const SettingsDrawer = ({
  mode,
  toggleColorMode,
  toggleColorLight,
  toggleColorDark,
}: ToggleColorModeProps) => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [anchor, setAnchor] = React.useState<'left' | 'right'>('right');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const savedDirection = localStorage.getItem('drawerDirection') as 'left' | 'right' | null;
    if (savedDirection) {
      setAnchor(savedDirection);
    }
  }, []);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleDirectionChange = (
    event: React.MouseEvent<HTMLElement>,
    newDirection: 'left' | 'right'
  ) => {
    if (newDirection !== null) {
      setAnchor(newDirection);
      localStorage.setItem('drawerDirection', newDirection);
    }
  };

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <SettingsIcon />
      </IconButton>
      <Drawer anchor={anchor} open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: isMobile ? 250 : 400, padding: 2 }}>
          <h2>Settings</h2>
          <Box>
            <StyledToggleButtonGroup color="primary" value={mode} exclusive aria-label="mode">
              <ToggleButton value="light" aria-label="light" onChange={toggleColorLight}>
                <LightModeIcon />
                Light
              </ToggleButton>
              <ToggleButton value="dark" aria-label="dark" onChange={toggleColorDark}>
                <DarkModeIcon />
                Dark
              </ToggleButton>
            </StyledToggleButtonGroup>
          </Box>
          <Box>
            <StyledToggleButtonGroup
              color="primary"
              value={anchor}
              exclusive
              onChange={handleDirectionChange}
              aria-label="text direction"
            >
              <ToggleButton value="left" aria-label="left to right">
                <FormatTextdirectionLToRIcon />
                Left to right
              </ToggleButton>
              <ToggleButton value="right" aria-label="right to left">
                <FormatTextdirectionRToLIcon />
                Right to left
              </ToggleButton>
            </StyledToggleButtonGroup>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};

export default SettingsDrawer;
