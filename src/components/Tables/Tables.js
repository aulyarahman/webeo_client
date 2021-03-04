import React, { useState, useContext, useEffect, useRef } from "react";
import MaterialTable from 'material-table';
import DialogEdit from '../DialogEdit'
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DialogDelete from '../DialogDelete';
import axios from 'axios';
import DialogImportFromExcel from '../DialogImport'
import { Context } from '../../context';


import { 
  DIALOG_EDIT,
  DIALOG_HAPUS,
  EDIT_DATA,
  GET_DATA,
  LOADING_UI,
  STOP_LOADING_UI,
  LOADING_DATA,
  STOP_LOADING_DATA,
  GET_USER_EDIT,
  
} from '../../utils/types';


export default function Tables() {

  const { state, dispatch } = useContext(Context);
  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {

        dispatch({ type: LOADING_DATA })

        axios
          .get(`/v1/users`)
          .then(res => {
             setData(res.data.data);
             dispatch({ type: GET_DATA, value: res.data.data})
             dispatch({ type: STOP_LOADING_DATA })
          })
          .catch(err => {
            // console.log(err)
            dispatch({ type: STOP_LOADING_DATA })
          })


  }, [])


    const handleEdit = (id) => {

      dispatch({
        type: DIALOG_EDIT
      })

      dispatch({
        type: EDIT_DATA,
        value: id
      })

    }

    const handleHapus = (id) => {
      dispatch({
        type: DIALOG_HAPUS
      })

      dispatch({
        type: EDIT_DATA,
        value: id
      })
    }


    const handleSwab = async (id, nohp) => {
    // dispatch({ type: LOADING_UI })
    //  const getUser = await axios.get(`/v1/users/${id}`)
    //  const { hasilSwab } = getUser.data.data

     const array = [...state.getData];
     const item = array.find(x => x._id == id);
 
      if(item.hasilSwab === 'Belum Ada') {
        await axios.put(`/v1/users/${id}`, { hasilSwab: 'Negatif', noHandphone: nohp})
        item.hasilSwab = 'Negatif';
       
      }
      else if(item.hasilSwab === 'Negatif') {
        await axios.put(`/v1/users/${id}`, { hasilSwab: 'Positif', noHandphone: nohp})
        item.hasilSwab = 'Positif'

      } else if(item.hasilSwab === 'Positif'){
        await axios.put(`/v1/users/${id}`, { hasilSwab: 'Negatif', noHandphone: nohp})
        item.hasilSwab = 'Negatif'
      }
      
      dispatch({ type: STOP_LOADING_UI })    
    
    }


    return (
      <>
      { state.dialogEditForm ? (<DialogEdit />) : null }
      { state.dialogHapusForm ? (<DialogDelete />) : null }
      <MaterialTable
        title=""
        columns={[
          { 
            title: 'Nama', 
            field: 'name',
          },
          { title: 'Status', field: 'role' },
          { title: 'No Handphone', field: 'noHandphone' },
          { title: 'No Kursi', field: 'noKursi' },
          { title: 'Status Kehadiran', field: 'statusKehadiran' },
          {
            field: 'hasilSwab',
            title: 'Hasil Swab',
            render: rowData => 
            {
              if(rowData.hasilSwab === 'Positif'){
                return   <Button 
                             style={{
                                backgroundColor: '#FF0000',
                                color: '#fff', 
                                fontSize: '10px',
                                width: '75px',
                              }}
                               color="primary" 
                              onClick={() => handleSwab(rowData._id, rowData.noHandphone)}>
                   
                              {rowData.hasilSwab}
                              </Button>
              }
              if(rowData.hasilSwab === 'Negatif'){
                return  <Button 
                          style={{
                            backgroundColor: '#109CF1',
                            color: '#fff', 
                            fontSize: '10px',
                            width: '75px'
                          }}
                          color="primary" 
                          onClick={() => handleSwab(rowData._id, rowData.noHandphone)}>
                          {rowData.hasilSwab}
                       </Button>
              } 
              if(rowData.hasilSwab === 'Belum Ada') {
               return <Button 
                         style={{
                              backgroundColor: '#7D90B2',
                              color: '#fff', 
                              fontSize: '10px',
                              width: '75px'
                            }}
                            color="primary" 
                            onClick={() => handleSwab(rowData._id, rowData.noHandphone)}>
                        
                            {rowData.hasilSwab}
                      </Button>
              }
            }
                                
          }
                              
        ]}
        data={state.getData}
        actions={[     
          
          rowData => ({
            icon: EditIcon,
            tooltip: 'Edit',
            onClick: (event, rowData) => {
                handleEdit(rowData._id)
            }
          }),

          rowData => ({
            icon: DeleteIcon,
            tooltip: 'Delete User',
            onClick: (event, rowData) => {
                handleHapus(rowData._id)
            },
          }),
          {
            icon: () => <DialogImportFromExcel style={{marginTop: '38%'}} />,
            tooltip: "Import",
            position: "toolbar",
            isFreeAction: true,
            onClick: () => {}
          },
                         
 
        ]}
        options={{

          searchFieldAlignment: 'left',
          actionsColumnIndex: -1,
          pageSizeOptions:[5,10,20],
          exportAllData: true,
          exportButton: true,
          rowStyle: rowData => ({
            backgroundColor: rowData.id * 1 ? '#F4F7FC' : '#FFF'
          }),
          headerStyle: { position: 'sticky', top: 0, fontWeight: 'bold', },
        
    
        }}
        style={{
          borderRadius: '20px'
        }}
      />

      </>
    )
  }

