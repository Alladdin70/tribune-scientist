import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';

import {Container, Box, Grid, Paper, TextField, Button} from '@material-ui/core';
import DivCarousel from './components/DivCarousel';
import SimpleModal from './components/SimpleModal';


const useStyles = makeStyles((theme)=>({
  app:{
    textAlign: 'center',
    backgroundImage: 'url("./img/background_craft.jpg")',
    backgroundRepeat: 'repeat',
  },
  canvas:{
    background: 'linear-gradient(45deg,black,gray)'
  },
  header:{
    backgroundImage: 'url("./img/header.png")',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    height: '400px',
    color: 'white',

  },
  topHeadeLine:{
    font: 'bold italic 250% serif', 
    lineHeight: '50px',
    textAlign:'center'
  },
  bottomHeadeLine:{
    position: 'absolute',
    top: '200px',
    left:'250px',
    font: 'bold italic 300% serif', 
    lineHeight: '100px',
    "@media (max-width:800px)": {
      left: '100px'
    },
    "@media (max-width:600px)": {
      left: '50px'
    },
    "@media (max-width:400px)": {
      left: '30px'
    },
    "@media (max-width:280px)": {
      left: '0px'
    }
  },
  coreInfoBlock: {
    color: 'white',
    font:'bold  190% serif',
    textAlign: 'center',
    "@media (max-width:900px)": {
      font:'bold 150% serif'
    },
    "@media (max-width:410px)": {
      font:'bold 120% serif'
    },
  },
  divider:{
    height: '50px'
  },
  advantagesBlock:{
    backgroundImage: 'url("./img/advantages.jpg")',
    overflowX:'hidden',
    overflowY:'hidden',
    backgroundSize: 'cover',
    height: '600px'
  },
  advantagesHeader:{
    textAlign: 'center',
    font: 'bold 180% serif',
    color: 'white'
  },
  advantagePaper:{
    minHeight: '180px',
    backgroundColor:'#150036',
    opacity: 0.6,
    font: 'bold 150% serif',
    color: 'white',
    overflowX:'hidden',
    overflowY:'hidden',
    lineHeight: '50px',
    paddingTop: '50px'
  },
  submitButton:{
    lineHeight: '40px'
  },
  footerData:{
    backgroundColor:'#150036',
    color: 'white',
    textAlign: 'left',
    height: '50px',
    lineHeight: '25px',
    font:'normal 100% serif',
    paddingLeft: '20px',
    overflowX:'hidden',
    overflowY:'hidden',
    "@media (max-width:900px)": {
      font:'normal 80% serif'
    },
    "@media (max-width:570px)": {
      font:'normal 70% serif'
    },
    "@media (max-width:450px)": {
      font:'normal 50% serif'
    },
  },
  alertString:{
    color: 'white',
    lineHeight: '50px',
    font:'normal 110% serif',
    textAlign: 'center',
    "@media (max-width:900px)": {
      font:'normal 90% serif'
    }, 
  },
  formFields:{
    align: 'center'
  }
}));

const App = (props) =>{
  const mailTemplate = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const styles = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const nameHandler = (event) =>{
    setName(event.target.value);
    props.onChangeName(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
    props.onChangeEmail(event.target.value);
  };
  const submitHandler = () => {
    if(mailTemplate.test(props.myStore.email) && props.myStore.name !== ""){
      console.log('Ok');
      setName("");
      setEmail("");
      props.onClearForm();
      alert("Сообщение отправлено!");
    }
    else{
      console.log('Error')
      alert("Ошибка заполнения формы");
    }

  };
  return (
    <div className={styles.app}>
      <Container className={styles.canvas} disableGutters={true} maxWidth="md">
        <Box className={styles.header}>
          <Box className={styles.topHeadeLine}>Электронный научно-практический журнал</Box>
          <Box className={styles.bottomHeadeLine}>ТРИБУНА УЧЕНОГО</Box>
        </Box>
        <Grid container>
          <Grid item xs={12}><Box className={styles.divider}></Box></Grid>
          <Grid item xs={12}>
            <Box className={styles.coreInfoBlock}>
              Публикация статей является неотъемлемой частью научной и учебной деятельности студентов, 
              магистрантов преподавателей и практиков.
            </Box>
          </Grid>
          <Grid item xs={12}><Box className={styles.divider}></Box></Grid>
          <Grid item xs={12}>
            <DivCarousel
                slide1="Публикация научных статей позволяет студентам получать стипендии, демонстрировать 
                свои знания в той или иной научной отрасли"
                slide2="Для преподавателей публикация научных работ и различных статей являются показателем 
                их научно-методической и учебной работы в университете."
                slide3="В процессе публикации авторы знакомят нас со своей деятельностью и предлагают решение 
                реальных производственных задач и жизненных проблем. "
            />  
          </Grid>
          <Grid item xs={12}><Box className={styles.divider}></Box></Grid>
          <Grid item xs={12}>
            <Box className={styles.coreInfoBlock}>
              В журнале доступна публикация для магистрантов, 
              бакалавров, аспирантов, преподавателей, научных сотрудников и соискателей!
            </Box>
          </Grid>
          <Grid item xs={12}><Box className={styles.divider}></Box></Grid>
          <Grid item xs={12}><Box className={styles.divider}></Box></Grid>  
          <Grid item xs={12}>
            <Box className={styles.advantagesBlock}>
              <Grid container spacing={5}>
                <Grid item xs={12}><Box className={styles.advantagesHeader}>Наши преимущества:</Box></Grid>
                <Grid item xs={4}>
                  <SimpleModal 
                    title="1. Наш журнал мультидисциплинарный"
                    title_modal="В журнале публикуются статьи по следующим отраслям науки:"
                    text="Исторические науки и археология, Экономические науки, Филологические науки,
                    Юридические науки, Педагогические науки, Медицинские науки, армацевтические науки,
                    Социологические науки, Политология"
                  />
                </Grid>
                <Grid item xs={4}>
                  <SimpleModal 
                    title="2. У нас быстрые сроки публикациий"
                    title_modal="2 дня"
                    text="Как правило, процесс публикации занимает не более двух дней."
                  />
                </Grid>
                <Grid item xs={4}>
                  <SimpleModal 
                    title="3. Сертификат для автора статьи"
                    title_modal="Сертификат"
                    text="После публикации статьи вы можете заказать и получить сертификат.В электронном или бумажном виде "
                  />
                </Grid>                  
                <Grid item xs={4}>
                  <SimpleModal 
                    title="4. У нас есть выданный РКН ISSN"
                    title_modal="ISSN"
                    text="Журналу «Трибуна учёного» присвоен международный стандартный номер сериального издания ISSN 2658-3119(Online)"
                  />
                </Grid>
                <Grid item xs={4}>
                  <SimpleModal 
                    title="5. У нас есть шаблон для вашей статьи"
                    title_modal="Шаблон сатьи"
                    text="На сайте журнала «Трибуна учёного» есть пример оформления сатьи, которым вы можете воспользоваться для своей публикации"
                  />
                </Grid>
                <Grid item xs={4}>
                  <SimpleModal 
                    title="6. Мы предлагаем услуги корректора"
                    title_modal="Дополнительные услуги"
                    text="Вы можете воспользоваться услугой корректора при публикации вашей статьи"
                  />
                </Grid>
                <Grid item xs={4}><Paper className={styles.advantagePaper}></Paper></Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12}><Box className={styles.divider}></Box></Grid>
          
          <Grid item xs={12}>
            <Box className={styles.coreInfoBlock}>
              Заполните поля формы и получите персональное предложение!
            </Box>
          </Grid>
          <Grid item xs={12}><Box className={styles.divider}></Box></Grid>
          <Grid item md={1}/>
          <Grid item md={3}>
            <Paper className={styles.formFields}>
              <TextField
                onChange={nameHandler}
                required
                id="filled-required-1"
                label="Имя"
                value={name}
                variant="filled"
              />
            </Paper>
          </Grid>
          <Grid item md={1}/>  
          <Grid item md={'auto'}>
            <Paper className={styles.formFields}>
              <TextField
                onChange={emailHandler}
                required
                id="filled-required-2"
                label="e-mail"
                value={email}
                variant="filled"
              />
            </Paper>  
          </Grid>
          <Grid item md={1}/>
          <Grid item md={'auto'}>
          <Button variant="contained" size="large" className={styles.submitButton} onClick={submitHandler}>ОТПРАВИТЬ</Button>
          </Grid>
          <Grid item md={'auto'}/>
          <Grid item md={12}>
            <Box className={styles.alertString}>
              *Нажимая кнопку "ОТПРАВИТЬ", вы соглашаетесь с получением писем от сайта tribune-scientists.ru
            </Box>
          </Grid>
          <Grid item xs={12}><Box className={styles.divider}></Box></Grid>
          <Grid item xs={12}><Box className={styles.divider}></Box></Grid>
          <Grid item xs={4}><Box className={styles.footerData}>Почтовый адрес: 634026, Томская обл., г.Томск, пер.Урожайный, д.28а, кв.129</Box></Grid>
          <Grid item xs={4}><Box className={styles.footerData}>Главный редактор: Желева Ольга Викторовна</Box></Grid>
          <Grid item xs={4}><Box className={styles.footerData}>e-mail: editor@tribune-scientists.ru <br/> ©Sergey Repin, 2020</Box></Grid>                
        </Grid>
      </Container>  
    </div>
  );  
  }
  export default connect(
    (state) => ({
        myStore: state,
    }),
    dispatch =>  ({
      onChangeEmail: (email) => {
        dispatch({
          type: "CHANGE_EMAIL",
          payload:{email:email}
        })  
      },
      onChangeName: (name) => {
        dispatch({
          type: "CHANGE_NAME",
          payload:{name:name}
        })  
      },
      onClearForm: () => {
        dispatch({
          type: "CLEAR_FORM",
          payload:{name:"", email:""}
        })  
      },
    })
  )(App)
