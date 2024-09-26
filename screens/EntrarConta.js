import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, Dimensions, StyleSheet, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { globalStyles, theme } from '../styles/theme';
import { Ionicons } from '@expo/vector-icons';
import { BotaoAuth } from '../componentes/botaoAuth';

const { width } = Dimensions.get('window');

export default function EntrarConta( { navigation } ) {
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState('');
    const[senhaVisivel, setSenhaVisivel] = useState(false);  // Controle de visibilidade

    return(
        <View style={styles.container}>
            <Text style={[styles.tituloEntrarConta, globalStyles.textBold]}>Entrar</Text>
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/input-email.png')} style={styles.inputIcon}/>
                <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize='none'
                />
            </View>
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/input-senha.png')} style={styles.inputIcon}/>
                <TextInput
                style={styles.inputSenha}
                value={senha}
                onChangeText={setSenha}
                placeholder="Senha"
                secureTextEntry={!senhaVisivel}  // Alterando visibilidade
                autoCapitalize='none'
                />
                <TouchableOpacity onPress={() => setSenhaVisivel(!senhaVisivel)} style={styles.eyeIcon}>
                    <Ionicons style={styles.senhaIcon} name={senhaVisivel ? "eye" : "eye-off"} size={24} color="gray" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.botaoEntrar}>
                <Text style={[styles.botaoEntrarTexto, globalStyles.textBold]}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={[styles.esqueciSenha, globalStyles.textSemiBold, globalStyles.underline]}>Esqueci minha senha</Text>
            </TouchableOpacity>
            <View style={styles.botoesAuthContainer}>
            <BotaoAuth icon={require('../assets/images/google.png')} />
            <BotaoAuth icon={require('../assets/images/facebook.png')} />
            </View>
            <Text style={[styles.cadastroTexto, globalStyles.textSemiBold]}>
            Não tem cadastro? <TouchableOpacity style={styles.cadastroLink} onPress={() => navigation.navigate('CriarConta')}>
            <Text style={[globalStyles.underline, globalStyles.textSemiBold]}>Cadastre-se</Text>
            </TouchableOpacity>
</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBFBFE',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    tituloEntrarConta: {
        fontSize: 30,
        marginTop: 60,
        marginBottom: 20,
        marginLeft: 25,
        alignSelf: 'flex-start',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
        borderRadius: 16,
        borderColor: '#E0E0E0',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 15,
        width: width * 0.8,
        height: 50,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },  
        shadowOpacity: 0.25,                    
        shadowRadius: 4,                        
        elevation: 5, 
    },
    inputIcon: {
        width: 24,
        height: 24,
        marginRight: 10,
    },
    eyeIcon: {
        position: 'absolute',
        right: 10,
        padding: 5,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    botaoEntrar: {
        backgroundColor: theme.colors.primary,
        paddingVertical: 15,
        borderRadius: 16,
        width: width * 0.8,
        alignItems: 'center',
        marginBottom: 20,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 4 },  
        shadowOpacity: 0.25,                    
        shadowRadius: 4,                        
        elevation: 5,                           
    },
    botaoEntrarTexto: {
        color: theme.colors.white,
        fontSize: 16,
    },
    esqueciSenha: {
        fontSize: 16,
    },
    cadastroTexto: {
        fontSize: 16,
    },
    cadastroLink: {
        color: theme.colors.secondary,
    },
    botoesAuthContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 30,
        marginTop: 80,
    },
});