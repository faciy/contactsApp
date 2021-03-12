import React, {useState, useContext} from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';
import RegisterComponent from '../../components/SignUp';
import register from '../../context/actions/auth/register';
import {GlobalContext} from '../../context/Provider';

const Register = () =>{


    const [form, setForm] = useState({})
    const [erros, setErros] = useState({})
    const {authDispatch, authState:{error, loading, data}} = useContext(GlobalContext)

    const onChange = ({name, value}) =>{
        setForm({...form, [name]:value})

        if(value !== ''){
            if(name === 'password'){
                if(value.length < 6){
                    setErros((prev) => {
                        return {...prev, [name]:'The field needs min 6 characters'}
                    })
                }else{
                    setErros((prev) => {
                        return {...prev, [name]:null}
                    })
                }
            }else{ 
                setErros((prev) => {
                    return {...prev, [name]:null}
                })
            }
        } else{
            setErros((prev) => {
                return {...prev, [name]:'The field is required'}
            })
        }
    }


    const onSubmit = () =>{
        //Validations
        // console.log('object', form)
        if(!form.userName){
            setErros(prev => {
                return {...prev, userName:'Please add a username'}
            })
        }
        if(!form.firstName){
            setErros(prev => {
                return {...prev, firstName:'Please add a firstName'}
            })
        }
        if(!form.lastName){
            setErros(prev => {
                return {...prev, lastName:'Please add a lastName'}
            })
        }
        if(!form.email){
            setErros(prev => {
                return {...prev, email:'Please add a email'}
            })
        }
        if(!form.password){
            setErros(prev => {
                return {...prev, password:'Please add a password'}
            })
        }
         // every retourne un vrai ou faux
        // trim permet de supprimer les espaces, les tabulations 
        if(Object.values(form).length == 5 &&
          Object.values(form).every((item) => item.trim().length > 0) && Object.values(erros).every((item) => !item)){
            register(form)(authDispatch)
          }
    }

    return(
    <ScrollView>
        <RegisterComponent 
        onSubmit={onSubmit}
        onChange={onChange}
        form={form} 
        erros={erros} 
        error={error}
        loading={loading}
        />
    </ScrollView>
    )
}

export default Register;