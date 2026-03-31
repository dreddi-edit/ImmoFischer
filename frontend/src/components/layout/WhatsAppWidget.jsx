import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '4921184361100';
  const defaultMessage = 'Hallo, ich interessiere mich für Ihre Dienstleistungen.';

  const handleSendMessage = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="whatsapp-widget" data-testid="whatsapp-widget" style={{ zIndex: 9998 }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 right-0 w-[320px] bg-white shadow-2xl rounded-lg overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#25D366] p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">ImmoProfi Fischer</p>
                    <p className="text-xs opacity-80">Meist innerhalb einer Stunde</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  data-testid="whatsapp-close"
                  className="p-1 hover:bg-white/20 rounded"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Area */}
            <div className="p-4 bg-[#E5DDD5] min-h-[150px]">
              <div className="bg-white p-3 rounded-lg shadow-sm max-w-[90%]">
                <p className="text-sm text-[#333]">
                  Hallo! Wie können wir Ihnen helfen? Schreiben Sie uns gerne Ihre Frage.
                </p>
                <p className="text-[10px] text-[#999] text-right mt-1">Jetzt</p>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-[#E5E5E5]">
              <button
                onClick={handleSendMessage}
                data-testid="whatsapp-send"
                className="w-full bg-[#25D366] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#20BA5C] transition-colors font-medium text-sm"
              >
                <Send className="w-4 h-4" />
                Chat starten
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        data-testid="whatsapp-toggle"
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

export default WhatsAppWidget;
