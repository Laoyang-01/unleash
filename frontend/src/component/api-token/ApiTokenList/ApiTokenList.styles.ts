import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'center',
        },
    },
    apiError: {
        maxWidth: '400px',
        marginBottom: '1rem',
    },
    center: {
        textAlign: 'center'
    },
    actionsContainer: {
        textAlign: 'center',
        display: 'flex-inline',
        flexWrap: 'nowrap'
    },
    hideSM:{
        [theme.breakpoints.down('sm')]: { 
            display: 'none'
    }
    },
    hideMD:{
        [theme.breakpoints.down('md')]: { 
            display: 'none'
    }
    },
    hideXS:{
        [theme.breakpoints.down('xs')]: { 
            display: 'none'
    }
    },
    token:{
        textAlign: 'left',
        [theme.breakpoints.up('sm')]: { 
            display: 'none'
    }
    }
}));
