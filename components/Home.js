import React from 'react';
import chatAction from '../actions/chat.actions'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { connect } from '../actions/chat.actions';

@connect(({ chat }) => ({ chat }))

export default class Home extends React.Component {
    state = {
        username: '',
        room: '',
    }

    handleChat = () => {
        const { navigation, dispatch } = this.props;
        const { username, room } = this.state;
        dispatch({ type: 'JOIN_REQUESt', username, room });
        //navigation.push('Chat', { username, room });
    }

    render() {
        const { navigation } = this.props;
        const { username, room } = this.state;

        return (
            <View style={styles.root}>
                <View style={styles.formControl}>
                    <Text style={styles.label}>
                        Username
                    </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Type your username..."
                        onChangeText={username => this.setState({ username })}
                        value={username}
                    />
                </View>

                <View style={styles.formControl}>
                    <Text style={styles.label}>
                        Room
                    </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Room name..."
                        onChangeText={room => this.setState({ room })}
                        value={room}
                    />
                </View>

                <View style={styles.formControl}>
                    <Button
                        title="Chat !"
                        onPress={this.handleChat}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24
    },

    textInput: {
        borderWidth: 1,
        borderColor: '#555',
        width: '100%',
        padding: 8
    },

    label: {
        width: '100%',
        textAlign: 'left',
        marginBottom: 5,
        color: '#555'
    },

    formControl: {
        marginVertical: 8,
        width: '100%'
    }
});