import React, { useState } from 'react';
import { Menu, Bell, User, Calculator } from 'lucide-react';

interface FormData {
  serviceTypes: {
    letter: boolean;
    document: boolean;
    parcel: boolean;
    speedPost: boolean;
    digitalCommerce: boolean;
  };
  additionalServices: {
    registry: boolean;
    gep: boolean;
    adPod: boolean;
    insurance: boolean;
    vp: boolean;
    postalService: boolean;
    blindLiterature: boolean;
    printReceipt: boolean;
  };
  amount: string;
  formNumber: string;
  deliveryBranch: string;
  sender: {
    saveInfo: boolean;
    name: string;
    phone: string;
    district: string;
    policeStation: string;
    postOffice: string;
    postCode: string;
    streetAddress: string;
  };
  recipient: {
    saveInfo: boolean;
    name: string;
    phone: string;
    district: string;
    policeStation: string;
    postOffice: string;
    postCode: string;
    streetAddress: string;
  };
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    serviceTypes: {
      letter: false,
      document: false,
      parcel: true,
      speedPost: true,
      digitalCommerce: false,
    },
    additionalServices: {
      registry: true,
      gep: true,
      adPod: false,
      insurance: false,
      vp: true,
      postalService: false,
      blindLiterature: false,
      printReceipt: true,
    },
    amount: '0.00',
    formNumber: '',
    deliveryBranch: '',
    sender: {
      saveInfo: true,
      name: 'exam controller, computer cell (9th floor) secondary and Higher secondary educati',
      phone: '01878469345',
      district: '',
      policeStation: '',
      postOffice: '',
      postCode: '',
      streetAddress: 'Banani, Dhaka Banani, Dhaka Banani, Dhaka',
    },
    recipient: {
      saveInfo: true,
      name: 'exam controller, computer cell (9th floor) secondary and Higher secondary educati',
      phone: '01878469342',
      district: 'Bagerhat',
      policeStation: '',
      postOffice: '',
      postCode: '',
      streetAddress: 'Badda, dhaka Banani, Dhaka Banani, Dhaka',
    },
  });

  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleServiceTypeChange = (type: keyof FormData['serviceTypes']) => {
    setFormData(prev => ({
      ...prev,
      serviceTypes: {
        ...prev.serviceTypes,
        [type]: !prev.serviceTypes[type],
      },
    }));
  };

  const handleAdditionalServiceChange = (type: keyof FormData['additionalServices']) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: {
        ...prev.additionalServices,
        [type]: !prev.additionalServices[type],
      },
    }));
  };

  const handleInputChange = (section: 'sender' | 'recipient' | 'general', field: string, value: string | boolean) => {
    if (section === 'general') {
      setFormData(prev => ({
        ...prev,
        [field]: value,
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value,
        },
      }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.recipient.name.trim()) {
      newErrors['recipient.name'] = 'Recipient name is required';
    }

    if (!formData.recipient.phone.trim()) {
      newErrors['recipient.phone'] = 'Recipient phone is required';
    } else if (!/^[0-9]{11}$/.test(formData.recipient.phone)) {
      newErrors['recipient.phone'] = 'Phone number must be 11 digits';
    }

    if (!formData.recipient.district.trim()) {
      newErrors['recipient.district'] = 'Recipient district is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
    }
  };

  const handleClear = () => {
    setFormData({
      serviceTypes: {
        letter: false,
        document: false,
        parcel: false,
        speedPost: false,
        digitalCommerce: false,
      },
      additionalServices: {
        registry: false,
        gep: false,
        adPod: false,
        insurance: false,
        vp: false,
        postalService: false,
        blindLiterature: false,
        printReceipt: false,
      },
      amount: '0.00',
      formNumber: '',
      deliveryBranch: '',
      sender: {
        saveInfo: false,
        name: '',
        phone: '',
        district: '',
        policeStation: '',
        postOffice: '',
        postCode: '',
        streetAddress: '',
      },
      recipient: {
        saveInfo: false,
        name: '',
        phone: '',
        district: '',
        policeStation: '',
        postOffice: '',
        postCode: '',
        streetAddress: '',
      },
    });
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-red-600 text-white px-4 py-3 flex items-center justify-between">
        <Menu className="w-5 h-5" />
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-white text-red-600 text-xs rounded-full w-4 h-4 flex items-center justify-center font-semibold">
              1
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <User className="w-5 h-5" />
            <span className="text-sm">Internal Operator</span>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 p-6">
          <h1 className="text-xl font-medium mb-6 text-gray-800">Create New Booking</h1>
          
          <button className="bg-blue-500 text-white px-4 py-2 rounded text-sm mb-6 hover:bg-blue-600 transition-colors">
            📋 Booking List
          </button>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Service Type Section */}
            <div>
              <h3 className="text-sm font-medium mb-3 text-gray-700">Select Service Type</h3>
              <div className="flex flex-wrap gap-6">
                {Object.entries({
                  letter: 'Letter',
                  document: 'Document',
                  parcel: 'Parcel',
                  speedPost: 'Speed Post',
                  digitalCommerce: 'Digital Commerce',
                }).map(([key, label]) => (
                  <label key={key} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.serviceTypes[key as keyof FormData['serviceTypes']]}
                      onChange={() => handleServiceTypeChange(key as keyof FormData['serviceTypes'])}
                      className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Service Type Section */}
            <div>
              <h3 className="text-sm font-medium mb-3 text-gray-700">Select Additional Service Type</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {Object.entries({
                  registry: 'Registry',
                  gep: 'GEP',
                  adPod: 'AD/POD',
                  insurance: 'Insurance',
                  vp: 'VP',
                  postalService: 'Postal Service',
                  blindLiterature: 'Blind Literature',
                  printReceipt: 'Print Receipt',
                }).map(([key, label]) => (
                  <label key={key} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.additionalServices[key as keyof FormData['additionalServices']]}
                      onChange={() => handleAdditionalServiceChange(key as keyof FormData['additionalServices'])}
                      className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{label}</span>
                  </label>
                ))}
              </div>
              
              <div className="flex gap-4">
                <div className="w-24">
                  <input
                    type="text"
                    value={formData.amount}
                    onChange={(e) => handleInputChange('general', 'amount', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Form Number"
                    value={formData.formNumber}
                    onChange={(e) => handleInputChange('general', 'formNumber', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Search Delivery Branch */}
            <div>
              <input
                type="text"
                placeholder="Search Delivery Branch"
                value={formData.deliveryBranch}
                onChange={(e) => handleInputChange('general', 'deliveryBranch', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Sender and Recipient Section */}
            <div className="grid grid-cols-2 gap-8">
              {/* Sender */}
              <div>
                <h3 className="text-sm font-medium mb-3 text-gray-700">Sender</h3>
                <div className="space-y-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.sender.saveInfo}
                      onChange={(e) => handleInputChange('sender', 'saveInfo', e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">Save Sender Info</span>
                  </label>

                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Sender Name</label>
                    <textarea
                      value={formData.sender.name}
                      onChange={(e) => handleInputChange('sender', 'name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                      rows={2}
                    />
                  </div>

                  <div className="relative">
                    <label className="block text-xs text-gray-600 mb-1">Sender Phone</label>
                    <input
                      type="text"
                      value={formData.sender.phone}
                      onChange={(e) => handleInputChange('sender', 'phone', e.target.value)}
                      className="w-full px-3 py-2 pr-10 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                    <span className="absolute right-3 top-7 text-red-500 text-xs font-bold">BD</span>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Sender District</label>
                    <input
                      type="text"
                      value={formData.sender.district}
                      onChange={(e) => handleInputChange('sender', 'district', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Sender Police Station</label>
                    <input
                      type="text"
                      value={formData.sender.policeStation}
                      onChange={(e) => handleInputChange('sender', 'policeStation', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Sender Post Office</label>
                    <input
                      type="text"
                      value={formData.sender.postOffice}
                      onChange={(e) => handleInputChange('sender', 'postOffice', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Sender Post Code</label>
                    <input
                      type="text"
                      value={formData.sender.postCode}
                      onChange={(e) => handleInputChange('sender', 'postCode', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Sender Street Address</label>
                    <textarea
                      value={formData.sender.streetAddress}
                      onChange={(e) => handleInputChange('sender', 'streetAddress', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                      rows={2}
                    />
                  </div>
                </div>
              </div>

              {/* Recipient */}
              <div>
                <h3 className="text-sm font-medium mb-3 text-gray-700">Recipient</h3>
                <div className="space-y-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.recipient.saveInfo}
                      onChange={(e) => handleInputChange('recipient', 'saveInfo', e.target.checked)}
                      className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">Save Recipient Info</span>
                  </label>

                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Recipient Name <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={formData.recipient.name}
                      onChange={(e) => handleInputChange('recipient', 'name', e.target.value)}
                      className={`w-full px-3 py-2 border rounded text-sm focus:outline-none focus:ring-1 resize-none ${
                        errors['recipient.name'] ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                      }`}
                      rows={2}
                    />
                    {errors['recipient.name'] && (
                      <span className="text-red-500 text-xs mt-1">{errors['recipient.name']}</span>
                    )}
                  </div>

                  <div className="relative">
                    <label className="block text-xs text-gray-600 mb-1">Recipient Phone</label>
                    <input
                      type="text"
                      value={formData.recipient.phone}
                      onChange={(e) => handleInputChange('recipient', 'phone', e.target.value)}
                      className={`w-full px-3 py-2 pr-10 border rounded text-sm focus:outline-none focus:ring-1 ${
                        errors['recipient.phone'] ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                      }`}
                    />
                    <span className="absolute right-3 top-7 text-red-500 text-xs font-bold">BD</span>
                    {errors['recipient.phone'] && (
                      <span className="text-red-500 text-xs mt-1">{errors['recipient.phone']}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Recipient District <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.recipient.district}
                      onChange={(e) => handleInputChange('recipient', 'district', e.target.value)}
                      className={`w-full px-3 py-2 border rounded text-sm focus:outline-none focus:ring-1 ${
                        errors['recipient.district'] ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
                      }`}
                    />
                    {errors['recipient.district'] && (
                      <span className="text-red-500 text-xs mt-1">{errors['recipient.district']}</span>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Recipient Police Station</label>
                    <input
                      type="text"
                      value={formData.recipient.policeStation}
                      onChange={(e) => handleInputChange('recipient', 'policeStation', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Recipient Post Office</label>
                    <input
                      type="text"
                      value={formData.recipient.postOffice}
                      onChange={(e) => handleInputChange('recipient', 'postOffice', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Recipient Post Code</label>
                    <input
                      type="text"
                      value={formData.recipient.postCode}
                      onChange={(e) => handleInputChange('recipient', 'postCode', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Street Address</label>
                    <textarea
                      value={formData.recipient.streetAddress}
                      onChange={(e) => handleInputChange('recipient', 'streetAddress', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 resize-none"
                      rows={2}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-8 py-2 rounded text-sm hover:bg-blue-600 transition-colors"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="bg-red-500 text-white px-8 py-2 rounded text-sm hover:bg-red-600 transition-colors"
              >
                Clear
              </button>
            </div>
          </form>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-white p-6 border-l border-gray-200">
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Serial No.</span>
                <span className="text-sm text-gray-800">N/A</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Status</span>
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              </div>
            </div>

            <div>
              <span className="text-sm text-gray-600">Info</span>
              <p className="text-sm text-gray-800 mt-1">Error fetching machine status</p>
            </div>

            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded text-sm hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
              <Calculator className="w-4 h-4" />
              Calculate Mashul
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;