import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/Add';
import { connect } from 'react-redux'

const rows = [
    {"FirstName":'Joe', "lastName":"Tribiani", "age":23,"employementDate":new Date()},
    {"FirstName":'Joe', "lastName":"Tribiani", "age":23,"employementDate":new Date()}
   
];


class ViewEmployee extends React.Component {


    render() {

        return (
    
            <Paper >
    
                <Grid container>
    
                    <Grid item xs={2}>
    
                        <TextField
                            id="firstName"
                            label="First Name"
                            margin="normal"
                        />
    
                    </Grid>
    
                    <Grid item xs={2} >
                        <TextField
                            id="lastName"
                            label="Last Name"
                            margin="normal"
                        />
                    </Grid>
    
                    <Grid item xs={2}>
                        <TextField
                            id="age"
                            label="Age"
                            margin="normal"
                            type="number"
                        />
                    </Grid>
    
                    <Grid item xs={2} >
                        <TextField
                            id="edate"
                            margin="normal"
                            type="date"
                        />
                    </Grid>
    
                    <Grid item xs={1}>
    
                        <IconButton 
                            margin="normal"
                            color="primary"
                            fullWidth
                            aria-label="add to shopping cart"
                            onClick={this.props.add}
                            >
                            <AddShoppingCartIcon />
                        </IconButton>
    
                    </Grid>
    
                    <Table />
    
    
                </Grid>
    
    
                <Table  aria-label="spanning table">
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">Age</TableCell>
                            <TableCell align="right">Employment Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.desc}>
                                <TableCell align="right">{row.FirstName}</TableCell>
                                <TableCell align="right">{row.lastName}</TableCell>
                                <TableCell align="right">{row.age}</TableCell>
                                <TableCell align="right">{row.employementDate.toISOString()}</TableCell>
                                <TableCell align="right">Delete</TableCell>
                                <TableCell align="right">Edit</TableCell>
                            </TableRow>
                        ))}
    
                    </TableBody>
                </Table>
    
            </Paper>
        );
    }

}

const mapStateToProps = (state) => {

    return {
    
    };
  
  };
  
  
  const mapDispatchToProps = (dispatch) => {
  
    return {
      add: (e) => {
        
        e.preventDefault();
        
        const action = {};
  
        dispatch(action);
  
      }
    };
  }
  
  const viewEmployeeCompo = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ViewEmployee);
  

export default viewEmployeeCompo;