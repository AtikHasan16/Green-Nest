import React, { useState } from "react";
import Container from "../Components/Container";
import { identifyPlant } from "../Services/gemini";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { MdCloudUpload, MdImageSearch } from "react-icons/md";

const AiSearch = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast.error("Please upload a valid image file");
        return;
      }
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setResult(null); // Clear previous result
    }
  };

  const handleIdentify = async () => {
    if (!selectedFile) {
      toast.warning("Please select an image first");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const data = await identifyPlant(selectedFile);
      setResult(data);
      toast.success("Plant identified successfully!");
    } catch (error) {
      toast.error(error.message || "Failed to identify plant");
    } finally {
      setLoading(false);
    }
  };

  const handleAddApiKey = (e) => {
    e.preventDefault();
    const apiKey = e.target.apiKey.value;
    if (apiKey) {
      localStorage.setItem("apiKey", JSON.stringify(apiKey));
      toast.success("API Key added successfully!");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  return (
    <div className="py-12 w-11/12 mx-auto min-h-screen poppins">
      <div className="text-center mb-10 font-bebas">
        <h1 className="text-4xl font-bold text-green-900 mb-4 flex items-center justify-center gap-3 ">
          <MdImageSearch /> AI Plant Identifier
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto poppins">
          Upload a photo of any unknown plant, and our AI will instantly
          identify it, providing you with its name and care instructions.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Upload Section */}
        <div className="w-full lg:w-1/2">
          <div className="card bg-base-100 shadow-xl border-t-4 border-green-600">
            <div className="card-body">
              <form onSubmit={handleAddApiKey}>
                <h1 className="text-2xl font-bold text-green-800">
                  Add API Key
                </h1>
                <p className="text-gray-600">
                  Please add your API key to use this feature
                </p>
                <input
                  type="text"
                  placeholder="API Key"
                  name="apiKey"
                  className="input input-bordered w-full mt-4 rounded-lg border-green-600 bg-green-50"
                  required
                />
                <button type="submit" className="btn-1 btn my-3 ">
                  Add API Key
                </button>
              </form>
              <h2 className="card-title text-2xl mb-4 text-green-800">
                Upload Photo
              </h2>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Select an image</span>
                </label>
                <div
                  className={`border-3 border-dashed rounded-xl p-10 flex flex-col items-center justify-center cursor-pointer transition-all
                      ${
                        previewUrl
                          ? "border-green-500 bg-green-50"
                          : "border-gray-300 hover:border-green-400 hover:bg-base-200"
                      }
                    `}
                  onClick={() => document.getElementById("file-upload").click()}
                >
                  {previewUrl ? (
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="max-h-64 rounded-lg object-contain"
                    />
                  ) : (
                    <>
                      <MdCloudUpload className="text-6xl text-gray-400 mb-2" />
                      <p className="font-semibold text-gray-500">
                        Click to upload image
                      </p>
                      <p className="text-xs text-gray-400">
                        JPG, PNG supported
                      </p>
                    </>
                  )}
                </div>
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
              </div>

              <div className="card-actions justify-end mt-6">
                <button
                  className="btn btn-primary bg-green-700 hover:bg-green-800 border-none text-white w-full text-lg"
                  onClick={handleIdentify}
                  disabled={loading || !selectedFile}
                >
                  {loading ? (
                    <ClipLoader size={20} color="#ffffff" />
                  ) : (
                    "Identify Plant"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="w-full lg:w-1/2">
          {loading && (
            <div className="flex flex-col items-center justify-center h-64">
              <ClipLoader size={50} color="#16a34a" />
              <p className="mt-4 text-gray-500 font-medium">
                Analyzing image...
              </p>
            </div>
          )}

          {!loading && result && (
            <div className="card bg-base-100 shadow-xl border-t-4 border-green-600 animate-fade-in">
              <div className="card-body">
                <div className="badge badge-success text-white gap-2 mb-2 p-3">
                  Found Match
                </div>
                <h2 className="text-3xl font-bold text-green-900">
                  {result.name}
                </h2>
                <p className="text-sm italic text-gray-500 mb-4">
                  {result.scientific_name}
                </p>

                <div className="divider"></div>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Description
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {result.description}
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Care Instructions
                </h3>
                <p className="text-gray-700 leading-relaxed bg-green-50 p-4 rounded-lg border border-green-100">
                  {result.care_instructions}
                </p>
              </div>
            </div>
          )}

          {!loading && !result && (
            <div className="flex flex-col items-center justify-center h-96 text-gray-400 bg-green-100/50 rounded-2xl border-2 border-dashed border-green-500">
              <MdImageSearch size={48} />
              <p className="mt-2">Result will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AiSearch;
