import {  DialogContent, DialogContentText, Grid, TextField } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const TodoTaskRegForm = () => {

  const [value, setValue] = useState<Dayjs | null>(
    dayjs(new Date()),
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };
  return (
    // <Grid container xs={6} spacing={2} direction="column" style={{ margin: '0 auto' }}>
    //   {/* <form id="task-form" className={Styles.form}> */}
    //   <Grid item xs={2}>
    //     <input id="task-name" placeholder='タスク名'></input>
    //     <input id="task-date" type="date"></input>
    //   </Grid>
    //   <div>タスクの詳細</div>
    //   <textarea id="task-description"></textarea>
    //   {/* </form> */}
    // </Grid>
    <DialogContent>
      <DialogContentText>
        登録するタスクの情報を入力してください。
      </DialogContentText>
      <Grid container spacing={6} direction="column">
        <Grid item>
          <TextField
            // onChange={handleContentChange}
            margin="dense"
            id="name"
            label="内容"
            fullWidth
          />
        </Grid>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            label="Date desktop"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} />}
          />

        </LocalizationProvider>
      </Grid>
    </DialogContent>
  );
};
export default TodoTaskRegForm;