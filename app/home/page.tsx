"use client";

import { useState } from "react";

export default function HomePage() {
  const [isConnected, setIsConnected] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState("");

  const handleConnect = async () => {
    try {
      // Simulate connection logic
      setConnectionStatus("Connecting...");

      // Replace with your actual connection logic
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsConnected(true);
      setConnectionStatus("Connected successfully! ✅");
    } catch (error) {
      setConnectionStatus("Connection failed ❌");
      console.error("Connection error:", error);
    }
  };

  const handleDisconnect = () => {
    setIsConnected(false);
    setConnectionStatus("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Home Page
        </h1>

        <div className="space-y-4">
          <p className="text-center text-gray-600">
            {isConnected
              ? "You are currently connected"
              : "Click the button below to connect"}
          </p>

          {connectionStatus && (
            <p
              className={`text-center text-sm ${
                connectionStatus.includes("✅")
                  ? "text-green-600"
                  : connectionStatus.includes("❌")
                    ? "text-red-600"
                    : "text-blue-600"
              }`}
            >
              {connectionStatus}
            </p>
          )}

          <button
            onClick={isConnected ? handleDisconnect : handleConnect}
            className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
              isConnected
                ? "bg-red-500 hover:bg-red-600"
                : "bg-blue-500 hover:bg-blue-600"
            } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isConnected ? "focus:ring-red-500" : "focus:ring-blue-500"
            }`}
          >
            {isConnected ? "Disconnect" : "Connect"}
          </button>
        </div>
      </div>
    </div>
  );
}
