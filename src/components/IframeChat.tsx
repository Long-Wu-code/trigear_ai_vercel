import React from 'react';
import { Bot } from 'lucide-react';

interface IframeChatProps {
  onClose: () => void;
}

const IframeChat: React.FC<IframeChatProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">运动AI贴身管家</h3>
              <div className="flex items-center space-x-2">
                <p className="text-sm text-gray-500">专业运动装备推荐助手</p>
                <div className="flex items-center text-xs">
                  <div className="flex items-center text-green-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                    已连接
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors duration-200"
          >
            <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Iframe Content */}
        <div className="flex-1 p-6">
          <div className="h-full rounded-xl overflow-hidden border border-gray-200">
            <iframe 
              src={import.meta.env.VITE_CHATBOT_URL || "http://teach.excelmaster.ai/chatbot/kX2Mcc2xV30qNjqB"} 
              className="w-full h-full"
              style={{ 
                width: '100%', 
                height: '100%', 
                minHeight: '500px',
                border: 'none'
              }}
              frameBorder="0" 
              allow="microphone"
              title="运动AI贴身管家"
            />
          </div>
        </div>

        {/* Footer Info */}
        <div className="p-4 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
          <div className="flex items-center justify-center text-sm text-gray-600">
            💡 提示：AI助手正在为您搜索网页获取最新的运动装备信息
          </div>
        </div>
      </div>
    </div>
  );
};

export default IframeChat;