// Preload script for secure IPC communication between processes
// Security: Implements contextBridge to create a secure API between processes

import { contextBridge, ipcRenderer } from 'electron';

// Define types for IPC message data to improve type safety
type IpcMainMessage = string | number | boolean | object | null | undefined;
type IpcRendererCallback = (...args: (string | number | boolean | object | null | undefined)[]) => void;

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('api', {
  // Send a message to the main process
  // channel: string - The channel name to send the message on
  // data: IpcMainMessage - The serializable data to send
  send: (channel: string, data: IpcMainMessage) => {
    // Whitelist channels to ensure security
    const validChannels = ['toMain'];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },

  // Receive a message from the main process
  // channel: string - The channel name to listen on
  // func: Function - The callback function
  receive: (channel: string, func: IpcRendererCallback) => {
    // Whitelist channels to ensure security
    const validChannels = ['fromMain'];
    if (validChannels.includes(channel)) {
      // Strip the event as it includes `sender`
      ipcRenderer.on(channel, (_, ...args) => func(...args));
    }
  }
});

// Security notice: The contextBridge API is used to expose a limited
// set of functionality to the renderer process, which has no Node.js
// access by default. This pattern prevents security vulnerabilities
// by controlling which functions and modules are accessible.
