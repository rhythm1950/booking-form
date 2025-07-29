import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Separator } from "../../components/ui/separator";
import { 
  Phone, 
  Calculator, 
  Search, 
  List, 
  User, 
  Bell, 
  ChevronDown,
  Menu,
  FileText,
  Package,
  Zap,
  Shield,
  Eye,
  Receipt,
  Book
} from "lucide-react";

export const Frame = (): JSX.Element => {
  // Service type options with icons
  const serviceTypes = [
    { id: "letter", label: "Letter", icon: FileText },
    { id: "document", label: "Document", icon: FileText },
    { id: "parcel", label: "Parcel", icon: Package },
    { id: "speedPost", label: "Speed Post", icon: Zap },
    { id: "digitalCommerce", label: "Digital Commerce", icon: FileText },
  ];

  // Additional service types with icons
  const additionalServices = [
    { id: "registry", label: "Registry", icon: FileText },
    { id: "gep", label: "GEP", icon: Shield },
    { id: "adPod", label: "AD/POD", icon: Eye },
    { id: "insurance", label: "Insurance", icon: Shield },
    { id: "postalService", label: "Postal Service", icon: FileText },
    { id: "blindLiterature", label: "Blind Literature", icon: Book },
    { id: "printReceipt", label: "Print Receipt", icon: Receipt },
  ];

  // Form fields for sender and recipient
  const formFields = [
    {
      id: "name",
      label: "Name",
      senderLabel: "Sender Name",
      recipientLabel: "Recipient Name",
    },
    {
      id: "phone",
      label: "Phone",
      senderLabel: "Sender Phone",
      recipientLabel: "Recipient Phone",
    },
    {
      id: "district",
      label: "District",
      senderLabel: "Sender District",
      recipientLabel: "Recipient District",
    },
    {
      id: "policeStation",
      label: "Police Station",
      senderLabel: "Sender Police Station",
      recipientLabel: "Recipient Police Station",
    },
    {
      id: "postOffice",
      label: "Post Office",
      senderLabel: "Sender Post Office",
      recipientLabel: "Recipient Post Office",
    },
    {
      id: "postCode",
      label: "Post Code",
      senderLabel: "Sender Post Code",
      recipientLabel: "Recipient Post Code",
    },
    {
      id: "streetAddress",
      label: "Street Address",
      senderLabel: "Sender Street Address",
      recipientLabel: "Street Address",
    },
  ];

  return (
    <div className="bg-transparent w-full font-inter">
      {/* Top navigation bar - Full width */}
      <div className="w-full h-[38px] bg-[#de3547] flex items-center justify-between px-4 shadow-sm">
        <div className="flex items-center">
          <Menu className="w-[11px] h-2.5 mr-2 text-white" />
        </div>
        <div className="flex items-center">
          <Bell className="w-[21px] h-6 mr-4 text-white" />
          <User className="w-[22px] h-[22px] mr-2 text-white" />
          <span className="font-normal text-white text-[10px]">
            internal Operator
          </span>
          <ChevronDown className="w-2.5 h-[9px] ml-2 text-white" />
        </div>
      </div>

      {/* Content container */}
      <div className="flex flex-row justify-center w-full">
        <div className="w-full max-w-[1280px]">
          <div className="h-full">
            <div className="w-full h-full bg-[url(/image.png)] bg-cover bg-[50%_50%]">
              <div className="relative">
                {/* Page title */}
                <div className="w-full h-[58px] flex items-center px-2.5 bg-white">
                  <h1 className="font-normal text-[#787a7e] text-[17.3px]">
                    Create New Booking
                  </h1>
                </div>

                <Separator className="w-full h-[3px] bg-[#f6f6f6]" />

                {/* Main content */}
                <div className="w-full bg-[url(/background.png)] bg-cover bg-[50%_50%] p-6">
                  {/* Booking List button */}
                  <Button className="h-[32px] bg-[#047cfe] rounded-[2px] border border-solid border-[#187af7] text-white text-[10px] font-normal mb-8 px-4 hover:bg-[#0369d9]">
                    <List className="w-4 h-4 mr-2" />
                    Booking List
                  </Button>

                  {/* Main layout with 70-30 split */}
                  <div className="flex gap-6">
                    {/* Left column - 70% */}
                    <div className="flex-[0.7]">
                      {/* Service Type Selection */}
                      <div className="mb-6">
                        <Label className="font-bold text-[#797a7b] text-[10px] block mb-3">
                          Select Service Type
                        </Label>
                        <div className="flex flex-wrap gap-6 mb-4">
                          {serviceTypes.map((service) => {
                            const IconComponent = service.icon;
                            return (
                              <div
                                key={service.id}
                                className="flex items-center space-x-2"
                              >
                                <Checkbox
                                  id={service.id}
                                  className="w-[12px] h-[12px] rounded-[2px] border-2"
                                />
                                <IconComponent className="w-4 h-4 text-[#959696]" />
                                <Label
                                  htmlFor={service.id}
                                  className="font-normal text-[#959696] text-[10px]"
                                >
                                  {service.label}
                                </Label>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Additional Service Type */}
                      <div className="mb-6">
                        <Label className="font-bold text-[#7e7f81] text-[10px] block mb-3">
                          Select Additional Service Type
                        </Label>
                        <div className="space-y-3">
                          <div className="flex flex-wrap gap-6">
                            {additionalServices.slice(0, 2).map((service) => {
                              const IconComponent = service.icon;
                              return (
                                <div
                                  key={service.id}
                                  className="flex items-center space-x-2"
                                >
                                  <Checkbox
                                    id={service.id}
                                    className="w-[12px] h-[12px] rounded-[2px] border-2"
                                  />
                                  <IconComponent className="w-4 h-4 text-[#9a999b]" />
                                  <Label
                                    htmlFor={service.id}
                                    className="font-normal text-[#9a999b] text-[10px]"
                                  >
                                    {service.label}
                                  </Label>
                                </div>
                              );
                            })}
                          </div>
                          <div className="flex flex-wrap gap-6 items-center">
                            {additionalServices.slice(2, 5).map((service) => {
                              const IconComponent = service.icon;
                              return (
                                <div
                                  key={service.id}
                                  className="flex items-center space-x-2"
                                >
                                  <Checkbox
                                    id={service.id}
                                    className="w-[12px] h-[12px] rounded-[2px] border-2"
                                  />
                                  <IconComponent className="w-4 h-4 text-[#999a9b]" />
                                  <Label
                                    htmlFor={service.id}
                                    className="font-normal text-[#999a9b] text-[10px]"
                                  >
                                    {service.label}
                                  </Label>
                                </div>
                              );
                            })}
                            <div className="flex items-center ml-4">
                              <span className="font-light text-[#939698] text-[10px] mr-2">
                                VP
                              </span>
                              <Input
                                className="w-[120px] h-[32px] bg-[#fefefe] border border-solid border-[#e1e1e1] rounded-[2px] font-light text-[#c3c3c3] text-[10px] text-center"
                                defaultValue="0.00"
                              />
                            </div>
                            <Input
                              className="w-[140px] h-[32px] bg-[#fdfdfd] border border-solid border-[#e1e1e1] rounded-[2px] font-normal text-[#cacaca] text-[10px]"
                              placeholder="Form Number"
                            />
                          </div>
                          <div className="flex flex-wrap gap-6">
                            {additionalServices.slice(5, 7).map((service) => {
                              const IconComponent = service.icon;
                              return (
                                <div
                                  key={service.id}
                                  className="flex items-center space-x-2"
                                >
                                  <Checkbox
                                    id={service.id}
                                    className="w-[12px] h-[12px] rounded-[2px] border-2"
                                  />
                                  <IconComponent className="w-4 h-4 text-[#9a9a9a]" />
                                  <Label
                                    htmlFor={service.id}
                                    className="font-normal text-[#9a9a9a] text-[10px]"
                                  >
                                    {service.label}
                                  </Label>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Search Delivery Branch */}
                      <div className="mb-8">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#9c9d9d]" />
                          <Input
                            className="w-full h-[32px] bg-[#fefefe] border border-solid border-[#e0e0e0] rounded-[2px] font-normal text-[#9c9d9d] text-[10px] pl-10"
                            placeholder="Search Delivery Branch"
                          />
                        </div>
                      </div>

                      {/* Sender and Recipient Forms */}
                      <div className="flex gap-6 mb-8">
                        {/* Sender Column */}
                        <div className="flex-1">
                          <Label className="font-bold text-[#717273] text-[10px] block mb-3">
                            Sender
                          </Label>
                          <div className="flex items-center mb-4">
                            <Checkbox
                              id="saveSenderInfo"
                              className="w-[12px] h-[12px] rounded-[2px] border-2"
                            />
                            <Label
                              htmlFor="saveSenderInfo"
                              className="font-normal text-[#9e9e9f] text-[10px] ml-2"
                            >
                              Save Sender Info
                            </Label>
                          </div>

                          {/* Sender Form Fields */}
                          <div className="space-y-4">
                            {formFields.map((field) => (
                              <div key={`sender-${field.id}`} className="relative">
                                <Input
                                  className={`w-full h-[32px] bg-[#fdfdfd] border border-solid border-[#e1e1e2] rounded-[2px] ${
                                    field.id === "name" || field.id === "streetAddress"
                                      ? "font-normal text-[#b4b5b6] text-[10px]"
                                      : field.id === "phone"
                                        ? "font-normal text-[#b3b5b7] text-[9px] pr-10"
                                        : field.id === "postCode"
                                          ? "bg-[#e8ebee] border-[#dddfe2]"
                                          : "font-normal text-[10px]"
                                  }`}
                                  defaultValue={
                                    field.id === "name"
                                      ? "exam controller,computer cell (9th floor) secondary and Higher secondary educati"
                                      : field.id === "phone"
                                        ? "01878469345"
                                        : field.id === "streetAddress"
                                          ? "Banani, Dhaka Banani, Dhaka Banani, Dhaka"
                                          : ""
                                  }
                                />
                                <Label className="absolute -top-2 left-3 bg-white px-1 font-normal text-[#9b9d9e] text-[9px]">
                                  {field.senderLabel}
                                </Label>
                                {field.id === "phone" && (
                                  <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#9b9d9e]" />
                                )}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Recipient Column */}
                        <div className="flex-1">
                          <Label className="font-normal text-[#717273] text-[10px] block mb-3">
                            Recipient
                          </Label>
                          <div className="flex items-center mb-4">
                            <Checkbox
                              id="saveRecipientInfo"
                              className="w-[12px] h-[12px] rounded-[2px] border-2"
                            />
                            <Label
                              htmlFor="saveRecipientInfo"
                              className="font-normal text-[#a0a0a1] text-[10px] ml-2"
                            >
                              Save Recipient Info
                            </Label>
                          </div>

                          {/* Recipient Form Fields */}
                          <div className="space-y-4">
                            {formFields.map((field) => (
                              <div
                                key={`recipient-${field.id}`}
                                className="relative"
                              >
                                <Input
                                  className={`w-full h-[32px] bg-[#fdfdfd] border border-solid border-[#e1e1e2] rounded-[2px] ${
                                    field.id === "name" || field.id === "streetAddress"
                                      ? "font-normal text-[#b5b6b8] text-[10px]"
                                      : field.id === "phone"
                                        ? "font-normal text-[#b5b7b8] text-[9px] pr-10"
                                        : field.id === "district"
                                          ? "font-normal text-[#ababad] text-[10px]"
                                          : field.id === "postCode"
                                            ? "bg-[#e8ebee] border-[#e1e3e4]"
                                            : "font-normal text-[10px]"
                                  }`}
                                  defaultValue={
                                    field.id === "name"
                                      ? "exam controller,computer cell(9th floor) secondary and Higher secondary educati"
                                      : field.id === "phone"
                                        ? "01878469342"
                                        : field.id === "district"
                                          ? "Bagerhat"
                                          : field.id === "streetAddress"
                                            ? "Badda,dhaka Banani, Dhaka Banani, Dhaka"
                                            : ""
                                  }
                                />
                                <Label className="absolute -top-2 left-3 bg-white px-1 font-normal text-[#a1a2a3] text-[9px]">
                                  {field.recipientLabel}
                                </Label>
                                {field.id === "phone" && (
                                  <Phone className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#a1a2a3]" />
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button className="h-[32px] bg-[#047bfe] rounded-[2px] border border-solid border-[#036af5] text-white text-[11px] font-normal px-6 hover:bg-[#0369d9]">
                          Submit
                        </Button>
                        <Button
                          variant="destructive"
                          className="h-[32px] bg-[#de3547] rounded-[2px] border border-solid border-[#df192d] text-white text-[10px] font-bold px-6 hover:bg-[#c82333]"
                        >
                          Clear
                        </Button>
                      </div>
                    </div>

                    {/* Right column - 30% */}
                    <div className="flex-[0.3] space-y-4">
                      {/* Status Table */}
                      <Card className="w-full bg-[#fefdfd] border border-solid border-[#f3ebea] rounded-[2px] shadow-sm overflow-hidden">
                        <CardContent className="p-0">
                          <table className="w-full border-collapse">
                            <tbody>
                              <tr>
                                <td className="p-3 border-r border-b border-solid border-[#f3ebea] font-bold text-[#757578] text-[10px] text-left w-[86px]">
                                  Serial No.
                                </td>
                                <td className="p-3 border-b border-solid border-[#f3ebea] font-light text-[#a9aaad] text-[10px] text-left">
                                  N/A
                                </td>
                              </tr>
                              <tr>
                                <td className="p-3 border-r border-b border-solid border-[#f3ebea] font-normal text-[#787979] text-[10px] text-left w-[86px]">
                                  Status
                                </td>
                                <td className="p-3 border-b border-solid border-[#f3ebea] text-left">
                                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                                </td>
                              </tr>
                              <tr>
                                <td className="p-3 border-r border-solid border-[#f3ebea] font-bold text-[#6e6d70] text-[10px] text-left w-[86px]">
                                  Info
                                </td>
                                <td className="p-3 font-normal text-[#9b9c9d] text-[9px] text-left">
                                  Error fetching machine status
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </CardContent>
                      </Card>

                      {/* Calculate Mashul Button */}
                      <Button className="w-full h-[32px] bg-[#047bfe] rounded-[2px] border border-solid border-[#086cf6] text-white text-[10px] font-normal hover:bg-[#0369d9]">
                        <Calculator className="w-4 h-4 mr-2" />
                        Calculate Mashul
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};