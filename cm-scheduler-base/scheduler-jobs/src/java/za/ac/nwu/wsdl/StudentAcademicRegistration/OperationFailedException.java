
package za.ac.nwu.wsdl.StudentAcademicRegistration;

import javax.xml.ws.WebFault;


/**
 * This class was generated by the JAX-WS RI.
 * JAX-WS RI 2.2.9-b130926.1035
 * Generated source version: 2.2
 * 
 */
@WebFault(name = "OperationFailed", targetNamespace = "http://nwu.ac.za/wsdl/StudentAcademicRegistration")
public class OperationFailedException
    extends Exception
{

    /**
     * Java type that goes as soapenv:Fault detail element.
     * 
     */
    private OperationFailed faultInfo;

    /**
     * 
     * @param faultInfo
     * @param message
     */
    public OperationFailedException(String message, OperationFailed faultInfo) {
        super(message);
        this.faultInfo = faultInfo;
    }

    /**
     * 
     * @param faultInfo
     * @param cause
     * @param message
     */
    public OperationFailedException(String message, OperationFailed faultInfo, Throwable cause) {
        super(message, cause);
        this.faultInfo = faultInfo;
    }

    /**
     * 
     * @return
     *     returns fault bean: za.ac.nwu.wsdl.studentacademicregistration.OperationFailed
     */
    public OperationFailed getFaultInfo() {
        return faultInfo;
    }

}
