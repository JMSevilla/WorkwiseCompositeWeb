/**
 * Property of the Digital Resolve Organization.
 * Reuse as a whole or in part is prohibited without permission.
 * Created by the Product Engineering Team/Software Engineering Innovation Group
 */

import {
    StepIconProps,
    Box,
    StepperProps,
    Stepper,
    Step,
    StepLabel,
    Typography,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const OnboardingStepIcon: React.FC<StepIconProps> = ({ active, completed }) => {
    return (
        <Box
        sx={{
            borderRadius: '100%',
            borderColor: (theme) => {
                if(completed || active){
                    return theme.palette.secondary.light
                }
                return theme.palette.grey[400]
            },
            borderStyle: 'solid',
            borderWidth: () => {
                if(active) return [4, 6]
                return 2;
            },
            backgroundColor: 'white',
            width: [15, 20],
            height: [15, 20],
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}
        >
            {completed && <CheckIcon sx={{ color: 'secondary.light', width: ['0.4em', '0.6em']}} />}
        </Box>
    )
}

type OnboardingStepperProps = {
    activeStep: number
    sx?: StepperProps['sx']
    steps: string[]
}

export const OnboardingStepper: React.FC<OnboardingStepperProps> = ({
    activeStep,
    sx = {},
    steps = []
}) => {
    return (
        <Stepper
            activeStep={activeStep}
            alternativeLabel
            sx={{ maxWidth: 600, width: '100%', px: 0, ...sx }}
        >
            {steps.map((label, i) => (
                <Step sx={{ px: 0 }} key={label} completed={activeStep > i} active={i === activeStep}>
                    <StepLabel StepIconComponent={OnboardingStepIcon}>
                        <Box sx={{ width: '50%', mx: 'auto' }}>
                            <Typography
                            fontWeight={activeStep === i ? 'bold' : 'normal'}
                            fontSize='0.6rem'
                            variant='caption'
                            display='flex'
                            alignItems='center'
                            >
                                {label}
                            </Typography>
                        </Box>
                    </StepLabel>
                </Step>
            ))}
        </Stepper>
    )
}