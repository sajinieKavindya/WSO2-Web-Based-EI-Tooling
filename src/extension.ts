// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "synapse-language-support" is now active!');

	vscode.workspace.onDidOpenTextDocument((document)=>{
		//parsing the document	
		let xmlData = document.getText();

		//getting filename of the opened document
		let fileExtension = document.fileName;

		//checking for '.xml' extension
		let pattern = new RegExp("\.xml$");
		let res = pattern.test(fileExtension);
		
		if (res === true){
			let synapseNSPttern = new RegExp("xmlns=\"http:\/\/ws\.apache\.org\/ns\/synapse");
			let response = synapseNSPttern.test(xmlData);

			vscode.languages.setTextDocumentLanguage(document, "SynapseXml");
		}

		// //using xmldom parser
		// var DOMParser = require('xmldom').DOMParser;
		// var doc = new DOMParser().parseFromString(xmlData,'text/xml');

		// //getting root element and its "xmlns" attribute
		// var rootElem = doc.documentElement;
		// let xmlns = rootElem.getAttribute('xmlns');

		// if(xmlns === "http://ws.apache.org/ns/synapse"){
		// 	console.log("This is a Synapse document");

		// 	vscode.languages.setTextDocumentLanguage(document, "SynapseXml");
		// }

	});
}

// this method is called when your extension is deactivated
export function deactivate() {}
