import moment from 'moment';
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class Chat extends React.PureComponent {
    state = {
        newMessage: '',
        messages: [],
    }

    handleSend = () => {
        const { route: { params } } = this.props;
        const { username, room } = params;
        const { newMessage, messages } = this.state;
        this.setState({
            newMessage: '',
            messages: [
                ...messages,
                {
                    id: messages.length,
                    author: username,
                    content: newMessage,
                    crated_at: moment(),
                }]
        })
    }

    render() {
        const { chat, route: { params } } = this.props;
        const { username, room } = params;
        const { newMessage } = this.state;
        const { messages, loading } = chat;

        const Empty = (
            < Text > {loading ? "Loading..." : "No messages yet"}</Text>
        )

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    ref={ref => this.listRef = ref}
                    data={messages}
                    renderItem={this.renderItem}
                    keyExtractor={titem => item.id}
                    style={styles.messageList}
                    ListEmptyComponent={Empty}
                    onContentSizeChange={() => this.listRef.scrollToEnd({ animated: true })}
                    onLayout={() => this.listRef.scrollToEnd({ animated: true })}>
                </FlatList>
                    <View style={styles.messageComposer} >
                        <TextInput
                            style={styles.textInput}
                            value={newMessage}
                            onChangeText={newMessage => this.setState({ newMessage })}>
                        </TextInput>

                        <Button
                            title="SEND"
                            onPress={this.handleSend}
                            disabled={this.state.newMessage = ''}>
                        </Button>
                    </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({

                    messageList: {
                    flex: 1,
    },

    message: {
                    padding: 8,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    authorMessage: {
                    alignItems: 'flex-end',
    },

    bubble: {
                    padding: 8,
        backgroundColor: '#CCC',
        maxWidth: '80%',
        borderRadius: 16,
        borderBottomRightRadius: 8,
        minWidth: '20%',
    },

    authorBubble: {
                    backgroundColor: '#3008AA',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 8,
    },

    timestamp: {
                    color: '#999999',
        fontSize: 12,
    },

    messageAuthor: {
                    fontWeight: 'bold',
        color: '#FFFFFF',
    },

    messageContent: {
                    color: '#333',
    },

    messageComposer: {
                    flex: 0,
        flexWrap: 'nowrap',
        flexDirection: 'row',
        padding: 4,
        backgroundColor: '#DDDDDD',
        borderTopWidth: 1,
        borderColor: '#AAA',
    },

    textInput: {
                    borderWidth: 1,
        borderColor: '#AAA',
        padding: 4,
        flex: 1,
        backgroundColor: '#FFFFFF',
    }
});