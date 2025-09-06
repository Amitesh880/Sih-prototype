import React, { useState } from 'react';
import { CloudArrowUpIcon, BeakerIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const ReportWastePage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [classification, setClassification] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    setFile(selectedFile);
    setClassification(null);
    setError(null);
    if (selectedFile) {
      setPreviewUrl(URL.createObjectURL(selectedFile));
    } else {
      setPreviewUrl(null);
    }
  };

  const classifyWaste = async () => {
    if (!file) {
      setError('Please upload an image first.');
      return;
    }

    setIsLoading(true);
    setClassification(null);
    setError(null);

    const reader = new FileReader();
    reader.onload = async () => {
      const base64Data = (reader.result as string).split(',')[1];
      const mimeType = file.type;

      // NOTE: This URL is now relative to the proxy defined in vite.config.ts
      const apiKey = "AIzaSyAfmYSeTo0Q2N6kOmoIt4XA7wXqXY-7m4I";
      const apiUrl = `/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

      const systemPrompt = "You are a 'Waste Classifier'. Your task is to analyze an image and classify the waste into one of these categories: 'Wet Waste', 'Dry Recyclable Waste', or 'Hazardous Waste'. Provide a concise, one-sentence classification.";
      const promptText = "Classify the waste in this image.";

      const payload = {
        contents: [
          {
            role: "user",
            parts: [
              { text: promptText },
              {
                inlineData: {
                  mimeType: mimeType,
                  data: base64Data
                }
              }
            ]
          }
        ],
        systemInstruction: { parts: [{ text: systemPrompt }] },
      };

      try {
        const fetchResponse = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!fetchResponse.ok) {
          const errorText = await fetchResponse.text();
          console.error('API responded with an error:', errorText);
          throw new Error(`API responded with status: ${fetchResponse.status}`);
        }

        const result = await fetchResponse.json();
        const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;
        
        if (text) {
          setClassification(text);
        } else {
          setClassification('Could not classify the waste. The image might not be clear enough or the content is ambiguous.');
        }
      } catch (e) {
        console.error('Network or API Error:', e);
        setError('Failed to classify waste. Please check your network and try again.');
      } finally {
        setIsLoading(false);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="p-8 bg-gray-50 flex-1 overflow-y-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Report Waste</h1>
        <p className="text-gray-600 mt-1">Identify and report waste with the power of AI.</p>
      </div>

      <div className="max-w-xl mx-auto bg-white p-8 rounded-3xl shadow-lg space-y-6">
        <div className="text-center">
          <label htmlFor="file-upload" className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer hover:border-green-500 transition-colors">
            {previewUrl ? (
              <img src={previewUrl} alt="Waste Preview" className="h-48 w-full object-contain rounded-xl mb-4" />
            ) : (
              <>
                <CloudArrowUpIcon className="h-12 w-12 text-gray-400 mb-2" />
                <span className="text-gray-600 font-semibold">Click to upload an image</span>
              </>
            )}
            <input id="file-upload" type="file" onChange={handleFileChange} className="hidden" accept="image/*" />
          </label>
        </div>

        <button
          onClick={classifyWaste}
          disabled={isLoading || !file}
          className={`w-full flex items-center justify-center px-6 py-3 rounded-full font-bold transition-colors ${
            isLoading || !file
              ? 'bg-gray-400 text-gray-100 cursor-not-allowed'
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          {isLoading ? (
            <>
              <ArrowPathIcon className="h-5 w-5 mr-2 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <BeakerIcon className="h-5 w-5 mr-2" />
              Analyze Waste
            </>
          )}
        </button>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}

        {classification && (
          <div className="bg-green-50 p-6 rounded-2xl text-green-800">
            <h3 className="text-lg font-bold mb-2">Analysis Result:</h3>
            <p className="text-sm">{classification}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportWastePage;
