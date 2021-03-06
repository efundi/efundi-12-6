
package za.ac.nwu.wsdl.StudentAcademicRegistration;

import javax.xml.ws.WebFault;


/**
 * This class was generated by the JAX-WS RI.
 * JAX-WS RI 2.2.9-b130926.1035
 * Generated source version: 2.2
 * 
 */
@WebFault(name = "DoesNotExist", targetNamespace = "http://nwu.ac.za/wsdl/StudentAcademicRegistration")
public class DoesNotExistException
    extends Exception
{

    /**
     * Java type that goes as soapenv:Fault detail element.
     * 
     */
    private DoesNotExist faultInfo;

    /**
     * 
     * @param faultInfo
     * @param message
     */
    public DoesNotExistException(String message, DoesNotExist faultInfo) {
        super(message);
        this.faultInfo = faultInfo;
    }

    /**
     * 
     * @param faultInfo
     * @param cause
     * @param message
     */
    public DoesNotExistException(String message, DoesNotExist faultInfo, Throwable cause) {
        super(message, cause);
        this.faultInfo = faultInfo;
    }

    /**
     * 
     * @return
     *     returns fault bean: za.ac.nwu.wsdl.studentacademicregistration.DoesNotExist
     */
    public DoesNotExist getFaultInfo() {
        return faultInfo;
    }

}
