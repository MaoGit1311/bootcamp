import * as promptSync from 'prompt-sync'

const prompt = promptSync();

const name = prompt('Provide a number:')

console.log(typeof(name))